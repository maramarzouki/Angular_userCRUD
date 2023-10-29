import { Injectable } from '@angular/core';
import { User } from 'src/app/users/model/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()

export class UserService {

  //private users : User[] = [];

  baseUrl = 'http://localhost:3000'

  constructor(private http : HttpClient) { }

  getUsers = () : Observable<User[]> => {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  
  addUser = (user : Object) : Observable<User> => {
    const options = {
      headers : new HttpHeaders(
        {'content-type': 'application/json'}
      )
    }

    return(this.http.post<User>(`${this.baseUrl}/users`, user, options))
  }

  getUserByID = (id : number) : Observable<User> => {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`)
  }

  deleteUser = (id : number) : Observable<User> => {
    return this.http.delete<User>(`${this.baseUrl}/users/${id}`)
  }

  editUser = (user : User) : Observable<User> => {
    const options = {
      headers: new HttpHeaders(
        {'content-type': 'application/json'}
      )
    };
    const body = {
      name : user.name,
      email : user.email,
      password : user.password
    }

    return (this.http.put<User>(`${this.baseUrl}/users/${user.id}`, body, options));
  }
}
