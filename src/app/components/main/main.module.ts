import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../home-page/home-page.component';
import { AppRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../home-page/header/header.component';
import { FooterComponent } from '../home-page/footer/footer.component';
import { SideBarComponent } from '../home-page/side-bar/side-bar.component';
import { DashBoardComponent } from '../home-page/dash-board/dash-board.component';
import { ButtonPageComponent } from '../home-page/button-page/button-page.component';
import { NgChartsModule } from 'ng2-charts';
import { AlertPageComponent } from '../home-page/alert-page/alert-page.component';
import { BookingPageComponent } from '../home-page/booking-page/booking-page.component';
import { CustomerPageComponent } from '../home-page/customer-page/customer-page.component';
import { TransactionPageComponent } from '../home-page/transaction-page/transaction-page.component';
import { ItemsPageComponent } from '../home-page/items-page/items-page.component';
import { SubItemsPageComponent } from '../home-page/sub-items-page/sub-items-page.component';


@NgModule({
  declarations: [
    
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    DashBoardComponent,
    ButtonPageComponent,
    AlertPageComponent,
    BookingPageComponent,
    CustomerPageComponent,
    TransactionPageComponent,
    ItemsPageComponent,
    SubItemsPageComponent,
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgChartsModule,
    FormsModule
   
  ]
})
export class MainModule { }
