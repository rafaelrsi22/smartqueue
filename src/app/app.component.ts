import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { routeTransition } from '../route-transition';
import { CreateQueueModalComponent } from "./components/create-queue-modal/create-queue-modal.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, CreateQueueModalComponent],
  animations: [routeTransition],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isRootRoute = false;

  constructor(protected router: Router, protected route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isRootRoute = this.router.url === "/";
    })
  }
}