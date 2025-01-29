import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HamburgerHeaderComponent } from '../hamburger-header/hamburger-header.component';

@Component({
  selector: 'app-header',
  imports: [HamburgerHeaderComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
}
