import { Component, OnInit } from '@angular/core';
import { Globe } from "../../globe.js";

@Component({
    selector: 'app-globe',
    templateUrl: './globe.component.html',
    styleUrls: ['./globe.component.scss']
})
export class GlobeComponent implements OnInit {

    /**
     * IN THIS @class Globe is imported from "../../globe.js". to use that just
     * create @object of that class pass the element 
     * you want to add globe in and then run function 
     * load() and play()
     * @function load is used to load the canvas in the
     * DOM that you provided.
     * @function run rander the globe and starts the animation.
     */

    constructor(
    ) { }

    ngOnInit(): void {
        var _globe = new Globe();
        _globe.el = document.querySelector(".js-globe");
        _globe.load();
        _globe.play();
    }
}
