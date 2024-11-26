import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeOuterComponent } from './Employee/employee-outer/employee-outer.component';
export const routes: Routes = [  

  //routes without navbar
  

  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  // Home page
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'login',
    component: LoginComponent, canActivate:[AuthGuard] },
  {path:'layout',component:LayoutComponent,
    title:'Layout',canActivate:[AuthGuard],
    children:[
      {path:'employee',component:EmployeeOuterComponent,
        canActivate:[AuthGuard]
      }
    ]
  
  },
 
    
    
    
];