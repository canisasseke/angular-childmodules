import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminModule} from './admin/admin.module';
const routes: Routes = [
  {path:'', loadChildren: './customers/customers.module#CustomersModule'},
  // redirectTo: 'customers', pathMatch: 'full'},
  {path:'admin',redirectTo: 'admin'}
  // {path:'customers',component: CustomerMainComponent},
  // {path:'admin',component: UsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
            AdminModule]
})
export class AppRoutingModule { }
