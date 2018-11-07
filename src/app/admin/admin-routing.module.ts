import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path:'admin',component: UsersComponent}
  // {path:'customers',component: CustomerMainComponent},
  // {path:'admin',component: UsersComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
            ]
})
export class AdminRoutingModule { }
