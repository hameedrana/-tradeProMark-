import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { SideBarComponent } from '../home-page/side-bar/side-bar.component';
import { HeaderComponent } from '../home-page/header/header.component';
import { FooterComponent } from '../home-page/footer/footer.component';
import { DashBoardComponent } from '../home-page/dash-board/dash-board.component';
import { ButtonPageComponent } from '../home-page/button-page/button-page.component';
import { AlertPageComponent } from '../home-page/alert-page/alert-page.component';
import { BookingPageComponent } from '../home-page/booking-page/booking-page.component';
import { CustomerPageComponent } from '../home-page/customer-page/customer-page.component';
import { TransactionPageComponent } from '../home-page/transaction-page/transaction-page.component';
import { ItemsPageComponent } from '../home-page/items-page/items-page.component';
import { SubItemsPageComponent } from '../home-page/sub-items-page/sub-items-page.component';

const routes: Routes = [
  {path: '', component:HomePageComponent,children:[
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {path: 'dashboard', component:DashBoardComponent},
    {path:'sidebar',component:SideBarComponent},
    {path:'header',component:HeaderComponent},
    {path:'footer',component:FooterComponent},
    {path:'button',component:ButtonPageComponent},
    {path:'alert',component:AlertPageComponent},
    {path:'booking',component:BookingPageComponent},
    {path:'customer',component:CustomerPageComponent},
    {path:'Transactions',component:TransactionPageComponent},
    {path:'items',component:ItemsPageComponent},
    {path:'subitems',component:SubItemsPageComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }