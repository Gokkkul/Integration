import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

interface IUser {
  fullname: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:3000/user/'



  userRegistration(userData: IUser) {
    console.log(userData);
    
    return this.http.post(this.apiUrl + 'add-user', userData)
  }

  loginUser(userdata:Record<string,string>){
    return this.http.post(this.apiUrl+"login",userdata);
  }
}

