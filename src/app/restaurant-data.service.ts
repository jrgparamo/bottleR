import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantDataService {

  currentRestaurant;
  restuarants;

  constructor() { }

  setRestaurant(data) {
    this.currentRestaurant = data;
  }
  setRestaurants(data) {
    this.restuarants = data;
  }
  getRestaurant() {
    let tmp = this.currentRestaurant;
    
    return tmp;
  }
  getRestaurants() {
    let tmp = this.restuarants;
  
    return tmp;
  }
  clearRestaurantData() {
    this.currentRestaurant = undefined;
    this.restuarants = undefined;
  }
}