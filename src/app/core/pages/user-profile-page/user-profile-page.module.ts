import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfilePageComponent } from './user-profile-page.component';
import {RouterModule, Routes} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {HeroesListModule} from "./heroes-list/heroes-list.module";
import {HistoryModule} from "./history/history.module";
import {BonusesModule} from "./bonuses/bonuses.module";


const routes: Routes = [
  {
    path: '',
    component: UserProfilePageComponent
  }
];

@NgModule({
  declarations: [
    UserProfilePageComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTabsModule,
        HeroesListModule,
        HistoryModule,
        BonusesModule,
    ]
})
export class UserProfilePageModule { }
