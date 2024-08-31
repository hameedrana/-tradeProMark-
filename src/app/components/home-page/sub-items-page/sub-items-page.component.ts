import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-items-page',
  templateUrl: './sub-items-page.component.html',
  styleUrls: ['./sub-items-page.component.scss']
})
export class SubItemsPageComponent {
  showModal: boolean = false;
  formData = { name: '', price: '',itemName: '', isAvailable: false };
  availableItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  items: Array<{ name: string, price: string, itemName: string, isAvailable: boolean }> = [];
  AddItmePlus='assets/plus-circle-svgrepo-com.svg'

  subItems= [
    {
      name: 'Hanna Gover',
      // email: 'hgover@gmail.com',
      // slots: ' assets/tickets-ticket-svgrepo-com.svg',
      price: '35K',
      subItem:'subItem1',
      // viewItem:'assets/view-eye-svgrepo-com.svg',
      editItem:'assets/edit-4-svgrepo-com.svg',
      deleteItem:'assets/delete-svgrepo-com.svg',
    },
    {
      name: 'Hanna Gover',
      // email: 'hgover@gmail.com',
      // slots: 'assets/tickets-ticket-svgrepo-com.svg',
    price: '35K',
    subItem:'subItem2',
    // viewItem:'assets/view-eye-svgrepo-com.svg',
    editItem:'assets/edit-4-svgrepo-com.svg',
    deleteItem:'assets/delete-svgrepo-com.svg',
    },
    {
      name: 'Hanna Gover',
      // email: 'hgover@gmail.com',
      // slots: ' assets/tickets-ticket-svgrepo-com.svg',
      price: '35K', 
      subItem:'subItem3',
      // viewItem:'assets/view-eye-svgrepo-com.svg',
      editItem:'assets/edit-4-svgrepo-com.svg',
      deleteItem:'assets/delete-svgrepo-com.svg',
    },
    {
      name: 'Hanna Gover',
      // email: 'hgover@gmail.com',
      // slots: ' assets/tickets-ticket-svgrepo-com.svg',
      price: '35K',
      subItem:'subItem4',
      // viewItem:'assets/view-eye-svgrepo-com.svg',
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
    this.formData = { name: '', price: '',itemName: '', isAvailable: false };

    // Close the modal
    this.closeModal();
  }

}
