import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css'],
})

export class AppHeader implements OnInit{
    // TODO: Fix Back buttton to show only on details route
    showBackBtn = true;
    constructor( private route: ActivatedRoute){}
    ngOnInit(){

    }
}