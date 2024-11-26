import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {  FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router : Router){}
 
  onSave(){
   
    this.http.post("https://retoolapi.dev/wRIR1b/signup",this.loginObj).subscribe((res:any) => {
      
      if(res){
        alert("signup Success");
        localStorage.setItem('signedUp', 'true'); // Set the signed-up status
      this.router.navigateByUrl('login'); // Navigate to login page
     }
     this.loginObj = {
      "userName": '',
      "mobile": '',
      "emailId": '',
      "password": ''
    };
    })
  }
  loginObj:any = {
    "userName":'',
    "mobile":'',
    "emailId":'',
    "password":''
  }

  http = inject(HttpClient);

}
