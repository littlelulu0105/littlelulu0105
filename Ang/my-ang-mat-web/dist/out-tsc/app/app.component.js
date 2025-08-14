import { __decorate } from "tslib";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
let AppComponent = class AppComponent {
    title = 'my-ang-mat-web';
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        standalone: true,
        imports: [],
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
    })
], AppComponent);
export { AppComponent };
