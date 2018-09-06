import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-gamesoptions',
    templateUrl: 'gamesoptions.component.html',
    styleUrls: ['gamesoptions.component.scss']
})
export class GamesoptionsComponent {
    gamesOptions: Object = [];

    constructor (http: Http){
        http.get('assets/games-options.json').map(res => res.json()).subscribe(gamesOptions => this.gamesOptions = gamesOptions);
    }
}

