import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusesComponent } from './bonuses.component';



@NgModule({
    declarations: [
        BonusesComponent
    ],
    exports: [
        BonusesComponent,

    ],
    imports: [
        CommonModule,

    ]
})
export class BonusesModule { }
