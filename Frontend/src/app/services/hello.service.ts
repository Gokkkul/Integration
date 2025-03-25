import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  apiUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  registerApiUrl = 'http://localhost:3000/register-user'


  getMessage(){
    return this.http.get(this.apiUrl)
  }

}
