import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AppHeader } from './header/app-header.component';
import { RestaurantList } from './restaurant-list/restaurant-list.component';
import { RestaurantDetails } from './restaurant-details/restaurant-details.component'
import { ServerCallService } from './server-call.service';
import { RestaurantDataService } from './restaurant-data.service';

const appRoutes: Routes = [
  { path: '', component: RestaurantList },
  { path: 'details', component: RestaurantDetails }
];
@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    RestaurantList,
    RestaurantDetails
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBKuz_jmz2mDZSmHTnLdnfuUJfCXfKEsc8'
    })
  ],
  providers: [ServerCallService, RestaurantDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
