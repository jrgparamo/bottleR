import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServerCallService } from '../server-call.service';
import { RestaurantDataService } from '../restaurant-data.service';
@Component({
    selector: 'app-restaurant-list',
    templateUrl: './restaurant-list.component.html',
    styleUrls: ['./restaurant-list.component.css'],
    providers: []
})

export class RestaurantList implements OnInit {
    restaurants = [];

    constructor(private serverCallService: ServerCallService, 
                private router: Router,
                private route: ActivatedRoute,
                private restaurantDataService: RestaurantDataService) {}

    goToDetails(index, restaurant) {
        console.log(index);
        //console.log(restaurant);
        this.restaurantDataService.setRestaurant(restaurant);
        //console.log(this.restaurantDataService.getRestaurant());
        this.router.navigate(['/details']);
    }
    getAllData() {
        return this.serverCallService.getRestaurantData();
    }
    async renderList() {
        let data = await this.getAllData()
        console.log(data.restaurants);
        this.restaurantDataService.setRestaurants(data.restaurants);
        //console.log(this.restaurantDataService.getRestaurants());
        this.restaurants = data.restaurants;
    }
    ngOnInit() {
        this.renderList();

    }
}