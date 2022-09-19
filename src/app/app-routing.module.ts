import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'battle',
    loadChildren: () =>
      import('./core/pages/battle-page/battle-page.module').then((m) => m.BattlePageModule)
  },
  {
    path: 'hero-info/:id',
    loadChildren: () =>
      import('./core/pages/hero-info-page/hero-info-page.module').then((m) => m.HeroInfoPageModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./core/pages/home-page/home-page.module').then((m) => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/pages/login-page/login-page.module').then((m) => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./core/pages/registration-page/registration-page.module').then((m) => m.RegistrationPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('./core/pages/user-profile-page/user-profile-page.module').then((m) => m.UserProfilePageModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
