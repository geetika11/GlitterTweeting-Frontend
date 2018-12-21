import { SignupComponent } from './app/signup/signup.component';
import { PlayGroundComponent } from './app/play-ground/play-ground.component';
import { FollowingComponent } from './app/following/following.component';
import { FollowersComponent } from './app/followers/followers.component';
import { SearchComponent } from './app/search/search.component';
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
      path: 'Play-Ground',
      component: PlayGroundComponent,
      pathMatch: 'full'
    },
    {
      path: 'Followers',
      component: FollowersComponent,
      pathMatch: 'full'
    },
    {
      path: 'Following',
      component: FollowingComponent,
      pathMatch: 'full'
    },
    {
      path: 'Search',
      component: SearchComponent,
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