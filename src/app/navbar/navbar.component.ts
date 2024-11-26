import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router) {}

  navigateSignup(){
    this.router.navigate(['/signup']);
  }
  navigateAbout(){
    this.router.navigate(['/about']);
  }
  navigateContact(){
    this.router.navigate(['/contact']);
  }
  navigateLogin(){
    this.router.navigate(['/login']);
  }
  navigateHome(){
    this.router.navigate(['/']);
  }
}
