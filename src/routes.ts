import { SignupComponent } from './app/signup/signup.component';
import { LoginComponent } from './app/login/login.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
   
    {
      path: 'signup',
      component: SignupComponent,
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent,
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      pathMatch: 'full'
    }];