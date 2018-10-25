import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantDataService } from '../restaurant-data.service';

@Component({
    selector: 'restaurant-details',
    templateUrl: './restaurant-details.component.html',
    styleUrls: ['./restaurant-details.component.css'],
    providers: []
})

export class RestaurantDetails implements OnInit {
    restaurant;
    zoom: number = 14;
    lat: number = 32.937492;
    lng: number = -96.7502451;

    constructor(private restaurantDataService: RestaurantDataService,
                private router: Router) {
                    // if(this.restaurant){
                    //     console.log(this.restaurant)
                    // } else{
                    //     console.error('NO_DATA_PASSTHROUGH');
                    //     this.router.navigate(['/']);
                    // }
                }

    getRestaurant() {
        this.restaurant = this.restaurantDataService.getRestaurant();
        this.lat = this.restaurant.location.lat;
        this.lng = this.restaurant.location.lng;
        console.log(this.restaurant)
    }
    ngOnInit() {
        this.getRestaurant();

    }

}