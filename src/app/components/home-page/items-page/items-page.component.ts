import { Component } from '@angular/core';
@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss']
})
export class ItemsPageComponent {
  showModal: boolean = false;
  formData = { name: '', price: '', isAvailable: false };
  items: Array<{ name: string, price: string, isAvailable: boolean }> = [];


  AddItmePlus='assets/plus-circle-svgrepo-com.svg'
  ListItems= [
    {
      name: 'Hanna Gover',
      // email: 'hgover@gmail.com',
      // slots: ' assets/tickets-ticket-svgrepo-com.svg',
      price: '35K',
      viewItem:'assets/view-eye-svgrepo-com.svg',
      editItem:'assets/edit-4-svgrepo-com.svg',
      deleteItem:'assets/delete-svgrepo-com.svg',
    },
    {
      name: 'Hanna Gover',
      // email: 'hgover@gmail.com',
      // slots: 'assets/tickets-ticket-svgrepo-com.svg',
    price: '35K',
    viewItem:'assets/view-eye-svgrepo-com.svg',
    editItem:'assets/edit-4-svgrepo-com.svg',
    deleteItem:'assets/delete-svgrepo-com.svg',
    },
    {
      name: 'Hanna Gover',
      // email: 'hgover@gmail.com',
      // slots: ' assets/tickets-ticket-svgrepo-com.svg',
      price: '35K', 
      viewItem:'assets/view-eye-svgrepo-com.svg',
      editItem:'assets/edit-4-svgrepo-com.svg',
      deleteItem:'assets/delete-svgrepo-com.svg',
    },
    {
      name: 'Hanna Gover',
      // email: 'hgover@gmail.com',
      // slots: ' assets/tickets-ticket-svgrepo-com.svg',
      price: '35K',
      viewItem:'assets/view-eye-svgrepo-com.svg',
      editItem:'assets/edit-4-svgrepo-com.svg',
      deleteItem:'assets/delete-svgrepo-com.svg',
    }
  ];

 
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    // Push the form data into the items array
    this.items.push({ ...this.formData });

    // Clear form data and close the modal
    this.formData = { name: '', price: '', isAvailable: false };

    // Close the modal
    this.closeModal();
  }

 
}
