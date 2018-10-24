import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { AppHeader } from './header/app-header.component';
import { ServerCallService } from './server-call.service';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    AppHeader
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ServerCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
