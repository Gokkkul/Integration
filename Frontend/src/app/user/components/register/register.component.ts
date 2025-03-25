import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private authService: AuthService){}

  registerForm:FormGroup = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  userRegistration(){
    this.authService.userRegistration(this.registerForm.value).subscribe(() => {
    console.log('Registration Successful...!');
    console.log(this.registerForm.value);
      
      
    })
  }


}
