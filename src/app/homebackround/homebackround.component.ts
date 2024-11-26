import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'; // Make sure the Navbar is imported

@Component({
  selector: 'app-homebackround',
  standalone: true,
  imports: [NavbarComponent], // Importing the Navbar component to this component
  templateUrl: './homebackround.component.html',
  styleUrls: ['./homebackround.component.css']
})
export class HomebackroundComponent {
}
