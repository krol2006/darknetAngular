import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-games',
    templateUrl: 'games.component.html',
    styleUrls: ['games.component.scss']
})
export class GamesComponent {
    games: Object = {};

    constructor (http: Http){
        http.get('assets/games.json').map(res => res.json()).subscribe(games => this.games = games);
    }
}