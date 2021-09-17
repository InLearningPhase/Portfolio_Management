import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrdersComponent } from './dashboard/all-orders/all-orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTransactionComponent } from './dashboard/order/add-transaction/add-transaction.component';
import { OrderComponent } from './dashboard/order/order.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'callback',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'orders', component: OrderComponent },
      { path: 'addTransaction', component: AddTransactionComponent },
      { path: 'allorders', component: AllOrdersComponent }
    ]
  },

  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
