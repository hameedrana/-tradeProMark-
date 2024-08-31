import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.scss']
})
export class TransactionPageComponent {
  transactions = [
    {
      name: 'Hanna Gover',
      Amount: '35K',
      date:'06-16-2024',
      BookingNo:'01',
      // Booking: ' assets/tickets-ticket-svgrepo-com.svg',
      Booking: 'assets/contact-details-svgrepo-com (1).svg'
    },
    {
      name: 'Hanna Gover',
      Amount: '35K',
      date:'06-16-2024',
      BookingNo:'02',
      // Booking: ' assets/tickets-ticket-svgrepo-com.svg',
      Booking: 'assets/contact-details-svgrepo-com (1).svg'
    },
    {
      name: 'Hanna Gover',
      Amount: '35K',
      date:'06-16-2024',
      BookingNo:'03',
      // Booking: ' assets/tickets-ticket-svgrepo-com.svg',
      Booking: 'assets/contact-details-svgrepo-com (1).svg'
    },
    {
      name: 'Hanna Gover',
      Amount: '35K',
      date:'06-16-2024',
      BookingNo:'04',
      // Booking: ' assets/tickets-ticket-svgrepo-com.svg',
      Booking: 'assets/contact-details-svgrepo-com (1).svg'
    }
  ];
}
