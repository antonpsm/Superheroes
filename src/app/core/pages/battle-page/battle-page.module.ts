import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattlePageComponent } from './battle-page.component';
import {RouterModule, Routes} from "@angular/router";
import {CardModule} from "../../components/card/card.module";
import {LoaderModule} from "../../components/loader/loader.module";
// import {NgxLoadingSpinnerModule} from "ngx-loading-spinner";

const routes: Routes = [
  {
    path: '',
    component: BattlePageComponent
  }
];

@NgModule({
  declarations: [
    BattlePageComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        CardModule,
        LoaderModule,
        // NgxLoadingSpinnerModule.forRoot()
    ]
})
export class BattlePageModule { }
