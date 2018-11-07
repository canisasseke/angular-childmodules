import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomersRoutingModule} from './customers-routing.module';
import { CustomerMainComponent } from './customer-main/customer-main.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@NgModule({
  declarations: [CustomerMainComponent, CustomerListComponent, CustomerDetailComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
