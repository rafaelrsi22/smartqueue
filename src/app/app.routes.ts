import { Routes } from '@angular/router';
import { QueueDashboardComponent } from './pages/queue-dashboard/queue-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './auth.guard';
import { loginGuard } from './login.guard';

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
    component: LoginComponent,
    canActivate: [loginGuard]
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [authGuard]
  }
];
