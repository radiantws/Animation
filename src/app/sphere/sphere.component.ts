import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sphere',
    templateUrl: './sphere.component.html',
    styleUrls: ['./sphere.component.scss']
})
export class SphereComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

        for (let i = 0; i <= 375; i++) {
            let el = document.createElement("div"),
                main_el = document.getElementById("particle-sphere")
            el.classList.add("c");
            main_el.appendChild(el)
        }
        setTimeout(function () {
            let elements = Array.from(document.getElementsByClassName("c"));

            elements.forEach((element, i) => {
                if (i < 350) {
                    setTimeout(function () { element.classList.add('active'); }, 8 * i);
                }
            });
        }, 8000);
    }

}
