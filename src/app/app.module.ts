import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './components/main/main.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './components/log-in/log-in.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
   
   
   
  
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MainModule,
    BrowserAnimationsModule,  
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
