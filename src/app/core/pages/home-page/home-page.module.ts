import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import {RouterModule, Routes} from "@angular/router";
import {HeaderModule} from "../../components/header/header.module";
import {CardModule} from "../../components/card/card.module";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    CardModule,
    ReactiveFormsModule
  ]
})
export class HomePageModule { }
