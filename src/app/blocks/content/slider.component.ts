import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-slider',
    templateUrl: 'slider.component.html',
    styleUrls: ['slider.component.scss']
})
export class SliderComponent {
    slider: Object = [];
    
    constructor(http: Http){
        http.get('assets/slider.json').map(res => res.json()).subscribe(slider => this.slider = slider);
    }
}