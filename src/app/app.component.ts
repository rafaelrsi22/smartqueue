import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { QueueDashboardComponent } from './pages/queue-dashboard/queue-dashboard.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, QueueDashboardComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isRootRoute = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isRootRoute = this.router.url === "/";
    })
  }
}
