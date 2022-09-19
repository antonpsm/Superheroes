import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list.component';
import {CardModule} from "../../../components/card/card.module";
import {Routes} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";


const routes: Routes = [
  {
    path: '',
    component: HeroesListComponent
  }
];

@NgModule({
    declarations: [
        HeroesListComponent
    ],
    exports: [
        HeroesListComponent
    ],
    imports: [
        CommonModule,
        CardModule,
        MatPaginatorModule,
    ]
})
export class HeroesListModule { }
