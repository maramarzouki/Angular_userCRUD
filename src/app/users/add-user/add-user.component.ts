import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent {

  constructor(
    private service: UserService,
    private router: Router
  ){}

  addUser = (f : NgForm) => {
    const newUser = {
      name : f.value.name,
      email : f.value.email,
      password : f.value.password,
    }

    this.service.addUser(newUser).subscribe(
      user => this.router.navigate(['/users/list'])
    )
  }
}
