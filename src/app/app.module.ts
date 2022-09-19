import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderModule} from "./core/components/header/header.module";
import {CardModule} from "./core/components/card/card.module";
import {HttpClientModule} from "@angular/common/http";
import {LoaderModule} from "./core/components/loader/loader.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HeaderModule,
    CardModule,
    HttpClientModule,
    LoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
