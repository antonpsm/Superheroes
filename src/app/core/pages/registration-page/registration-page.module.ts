import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPageComponent } from './registration-page.component';
import {RouterModule, Routes} from "@angular/router";
import {InputModule} from "../../components/input/input.module";
import {ReactiveFormsModule} from "@angular/forms";
import {GetControlModule} from "../../pipes/get-control/get-control.module";

const routes: Routes = [
  {
    path: '',
    component: RegistrationPageComponent
  }
];

@NgModule({
  declarations: [
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputModule,
    ReactiveFormsModule,
    GetControlModule
  ]
})
export class RegistrationPageModule { }
