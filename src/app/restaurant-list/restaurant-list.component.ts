import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RestaurantDataService } from '../restaurant-data.service';

@Component({
    selector: 'app-restaurant-list',
    templateUrl: './restaurant-list.component.html',
    styleUrls: ['./restaurant-list.component.css'],
    providers: []
})

export class RestaurantList implements OnInit {
    restaurants = [];
    restaurant;

    zoom: number = 17;
    lat: number = 32.937492;
    lng: number = -96.7502451;
    openedWindow : number = 0;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private restaurantDataService: RestaurantDataService
    ) {}

    openWindow(id) {
        this.openedWindow = id;
    }

    isInfoWindowOpen(id) {
        return this.openedWindow == id;
    }
    scrollToListItem(index) {
        document.querySelectorAll(".list-item")[index].scrollIntoView();
    }

    clickedMarker(index, restaurant){
        this.restaurant = restaurant;
        this.scrollToListItem(index);
        console.log(restaurant, "From marker")
    }

    goToDetails(index, restaurant) {
        console.log(index);
        console.log(restaurant);
        this.restaurantDataService.setRestaurant(restaurant);
        // //console.log(this.restaurantDataService.getRestaurant());
        this.restaurant = this.restaurants[index];
        this.lat = this.restaurant.location.lat;
        this.lng = this.restaurant.location.lng;
        this.openWindow(index);
        this.isInfoWindowOpen(index);
        if(window.innerWidth <= 766){
            this.router.navigate(['/details']);
        }
    }

    getRestaurants() {
        let results;
        if(this.restaurantDataService.getRestaurants()){
            results = this.restaurantDataService.getRestaurants();
        } else {
            this.router.navigate(['/home']);
            results = undefined;
        }
        return results;
    }

    renderList() {
        let data = this.getRestaurants();
        console.log(data, 'From Service');
        this.restaurants = data;
        this.restaurant = this.restaurants[0];
        this.lat = this.restaurant.location.lat;
        this.lng = this.restaurant.location.lng;
    }

    ngOnInit() {
        this.renderList();
    }
}