import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-winners',
    templateUrl: 'winners.component.html',
    styleUrls: ['winners.component.scss']
})
export class WinnersComponent {
    winners: Object = [];

    constructor(http: Http){
        http.get('assets/winners.json').map(res => res.json()).subscribe(winners => this.winners = winners);
    }
}
