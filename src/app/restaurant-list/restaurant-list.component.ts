import { Component, OnInit } from '@angular/core';
import { ServerCallService } from '../server-call.service';

@Component({
    selector: 'app-restaurant-list',
    templateUrl: './restaurant-list.component.html',
    styleUrls: ['./restaurant-list.component.css'],
    providers: [ServerCallService]
})

export class RestaurantListComponent implements OnInit {
    restaurants = [];

    constructor(private serverCallService: ServerCallService) {}

    getAllData() {
        // this.serverCallService.getRestaurantData()
        //     .subscribe(
        //         (restaurantList: any) => {
        //             console.log(restaurantList)
        //             console.log(restaurantList.restaurants)

        //             this.restaurants = restaurantList.restaurants;
        //             return restaurantList;
        //         },
        //         (error) => console.error(error)
        //     );
        return this.serverCallService.getRestaurantData();
    }
    async renderList() {
        let data = await this.getAllData()
        this.restaurants = data.restaurants;
        //console.log(data.restaurants);
    }
    ngOnInit() {
        this.renderList();
    }
}