import { Routes } from '@angular/router';
import { QueueDashboardComponent } from './pages/queue-dashboard/queue-dashboard.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    pathMatch: "full",
    path: "",
    redirectTo: "dashboard"
  },
  {
    path: "dashboard",
    component: QueueDashboardComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];
