import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css'],
})

export class AppHeader implements OnInit{
    showBackBtn = this.router.url === '/details' ? true : false;
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ){}
    ngOnInit(){

    }
}