import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'langs-menu',
    templateUrl: 'langsmenu.component.html',
    styleUrls: ['langsmenu.component.scss']
})
export class LangsmenuComponent {
    langsMenu: Object = [];

    constructor(http: Http) {
        http.get('assets/langs-menu.json')
            .map(res => res.json())
            .subscribe(langsMenu => this.langsMenu = langsMenu);
    }
}