import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent {
  Bookings = [
    {
      name: 'Hanna Gover',
      email: 'hgover@gmail.com',
      slots: '  17-08-2024 12pm - 17.08-2024 4pm',
      status: 'bg-danger',
      price: '35K',
      details: 'assets/contact-details-svgrepo-com (1).svg'
    },
    {
      name: 'Hanna Gover',
      email: 'hgover@gmail.com',
      slots: ' 17-08-2024 12pm - 17.08-2024 4pm',
      status: 'bg-primary',
      price: '35K',
     details: 'assets/contact-details-svgrepo-com (1).svg'
    },
    {
      name: 'Hanna Gover',
      email: 'hgover@gmail.com',
      slots: ' 17-08-2024 12pm - 17.08-2024 4pm',
      status: 'bg-warning',
      price: '35K',
     details: 'assets/contact-details-svgrepo-com (1).svg'
    },
    {
      name: 'Hanna Gover',
      email: 'hgover@gmail.com',
      slots: ' 17-08-2024 12pm - 17.08-2024 4pm',
      status: 'bg-success',
      price: '35K',
      details: 'assets/contact-details-svgrepo-com (1).svg'
    }
  ];
}
