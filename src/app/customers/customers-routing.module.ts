import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerMainComponent } from './customer-main/customer-main.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {path:'customers',component: CustomerMainComponent,
    children:[
      {path:'',component: CustomerListComponent}
    ]},
  // {path:'customers',component: CustomerMainComponent},
  // {path:'admin',component: UsersComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
            ]
})
export class CustomersRoutingModule { }
