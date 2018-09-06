import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: "main-menu",
    templateUrl: 'mainmenu.component.html',
    styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent {
    menu: Object = [];

    constructor(http: Http){
        http.get('assets/menu.json')
            .map(res => res.json())
            .subscribe(menu => this.menu = menu);
    }
}