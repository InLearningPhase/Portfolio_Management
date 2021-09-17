import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard.component';
import { OrderComponent } from './order/order.component';
import { AddTransactionComponent } from './order/add-transaction/add-transaction.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [MenuComponent,NavComponent, DashboardComponent, OrderComponent, AddTransactionComponent, AllOrdersComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class DashboardModule { }
