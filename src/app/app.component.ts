import { Component } from '@angular/core';
import request = require('request');
//import { request } from 'request';


@Component({
    //moduleId: module.id,
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <a (click)="doSomething()">do something.</a>
    <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
   `,
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Tour of Heroes';
    url = 'http://localhost:8042/';
    doSomething() {
        console.log('something');

        request({ baseUrl: this.url, uri: '/patients', json: true }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                console.log(body)
                //display each patient
                body.forEach(element => {
                    this.getPt(element);
                });
            } else {
                console.log(error);
            }
        });
    }


    getPt(id: string) {
        // request({ baseUrl: this.url, uri: '/patients/' + id, json: true }, function (error, response, body) {
        //     if (!error && response.statusCode == 200) {
        //         console.log(body);
        //     } else {
        //         console.log(error);
        //     }
        // });
    }
}