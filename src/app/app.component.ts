import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServerCallService } from './server-call.service';
import { RestaurantDataService } from './restaurant-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'BottleR Restaurants';

  constructor(
    private serverCallService: ServerCallService, 
    private router: Router,
    private route: ActivatedRoute,
    private restaurantDataService: RestaurantDataService
  ) {}

  getAllData() {
    return this.serverCallService.getRestaurantData();
  }

  async setList() {
    let data = await this.getAllData()
    console.log(data.restaurants, 'Server Call');
    this.restaurantDataService.setRestaurants(data.restaurants);
    //console.log(this.restaurantDataService.getRestaurants(), 'Service Call');
    this.router.navigate(['/list']);
  }

  ngOnInit() {
    this.setList();
  }
}
