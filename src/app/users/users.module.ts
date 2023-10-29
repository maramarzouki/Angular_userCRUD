import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/users/service/user.service';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    AddUserComponent,
    ListUsersComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers : [UserService]
})
export class UsersModule { }
