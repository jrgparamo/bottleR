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
        console.log(this.restaurant)
    }
    ngOnInit() {
        this.getRestaurant();
    }

}