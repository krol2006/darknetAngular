import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'footer-menu',
    templateUrl: 'footermenu.component.html',
    styleUrls: ['footermenu.component.scss']
})
export class FootermenuComponent {
    footerMenu: Object = [];

    constructor (http: Http){
        http.get('assets/footer-menu.json').map(res => res.json()).subscribe(footerMenu => this.footerMenu = footerMenu);
    }
}
