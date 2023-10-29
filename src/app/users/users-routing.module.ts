import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  { path: 'adduser', component : AddUserComponent },
  { path: 'list', component : ListUsersComponent },
  { path: 'editUser/:id', component : EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class UsersRoutingModule { }
