import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ServerCallService {
    constructor(private http: Http) {}
    getRestaurantDataBROKEN() {
        return this.http.get('https://s3.amazonaws.com/br-codingexams/restaurants.json')
         .pipe(map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
         ))
         .pipe(catchError(error => {
            return throwError( 'Fetching Restaurant List Failed!' );
         }));
    }

    getRestaurantData() {
        const response = this.http.get('https://s3.amazonaws.com/br-codingexams/restaurants.json').toPromise()
            .then((response: Response) => {
                const data = response.json();
                return data;
            })
            .catch((error) => {
                console.error('Fetching Restaurant List Failed!');
                return error;
            });
        return response;
    }
}