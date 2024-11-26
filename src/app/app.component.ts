
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeOuterComponent } from './Employee/employee-outer/employee-outer.component';
import { HomebackroundComponent } from './homebackround/homebackround.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,  // Import RouterModule here, not RouterOutlet
    FormsModule,
    NavbarComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,LayoutComponent,SidebarComponent,EmployeeOuterComponent,HomebackroundComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Login-Page';
  
}

