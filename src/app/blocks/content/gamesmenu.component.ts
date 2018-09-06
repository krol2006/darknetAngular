import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-gamesmenu',
    templateUrl: 'gamesmenu.component.html',
    styleUrls: ['gamesmenu.component.scss']
})
export class GamesmenuComponent {
    gamesMenu: Object = [];

    constructor (http: Http){
        http.get('assets/games-menu.json').map(res => res.json()).subscribe(gamesMenu => this.gamesMenu = gamesMenu);
    }    
}
