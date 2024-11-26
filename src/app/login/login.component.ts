import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  LoginList: any[] = [];
  emailId: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router : Router) {}

  
  // Fetch data from API and validate login
  getApi() {
    this.http.get("https://retoolapi.dev/wRIR1b/signup").subscribe(
      (res: any) => {
        this.LoginList = res; 

        
        const user = this.LoginList.find(
          (user: any) => user.emailId === this.emailId && user.password === this.password
        );

        if (user) {
          alert("Login Successful");
          localStorage.setItem('login', 'true');
      this.router.navigateByUrl('layout'); 
          
        } else {
          alert("Invalid email or password");
        }
        this.emailId = '';
        this.password = '';
      },
      (error) => {
        console.error("Error fetching login data:", error);
      }
    );  }

    

}
