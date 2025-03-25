import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:3000'



  userRegistration(userData: FormGroup){
    return this.http.post(this.apiUrl+'/register-user ', userData)
  }
}

