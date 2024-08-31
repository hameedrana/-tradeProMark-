import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent {
  Bookings = [
    {
      name: 'Hanna Gover',
      email: 'hgover@gmail.com',
      slots: ' assets/tickets-ticket-svgrepo-com.svg',
      price: '35K',
      details: 'assets/contact-details-svgrepo-com (1).svg'
    },
    {
      name: 'Hanna Gover',
      email: 'hgover@gmail.com',
      slots: 'assets/tickets-ticket-svgrepo-com.svg',
    price: '35K',
     details: 'assets/contact-details-svgrepo-com (1).svg'
    },
    {
      name: 'Hanna Gover',
      email: 'hgover@gmail.com',
      slots: ' assets/tickets-ticket-svgrepo-com.svg',
      price: '35K',
     details: 'assets/contact-details-svgrepo-com (1).svg'
    },
    {
      name: 'Hanna Gover',
      email: 'hgover@gmail.com',
      slots: ' assets/tickets-ticket-svgrepo-com.svg',
      price: '35K',
      details: 'assets/contact-details-svgrepo-com (1).svg'
    }
  ];
}
