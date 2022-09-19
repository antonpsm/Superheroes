import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroInfoPageComponent } from './hero-info-page.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: HeroInfoPageComponent
  }
];

@NgModule({
  declarations: [
    HeroInfoPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HeroInfoPageModule { }
