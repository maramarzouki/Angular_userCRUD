import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormBuilder } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute,
    private servie : UserService,
    private formBuilder : FormBuilder,
    private router : Router
  ) {}

  user? : User;

  editForm = this.formBuilder.group({
    name : '',
    email : '',
    password : ''
  })

  editUser = () => {
    const values = this.editForm.value 
    this.servie.editUser(
      new User(this.user!.id, values.name!, values.email!, values.password!)
    ).subscribe(
      user => this.router.navigate(['/users/list']),
    )
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.servie.getUserByID(+params['id']).subscribe(
          user => {
            this.user = user;
            this.editForm.setValue({
              name : this.user.name,
              email: this.user.email,
              password: this.user.password
            })
          }
        )
      }
    )
  }
}
