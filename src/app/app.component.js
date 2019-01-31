"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Welcome Angular 2';
        this.cone = true;
        this.ctwo = false;
    }
    AppComponent.prototype.changeData = function () {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>You will never walk alone {{name}}</h1>\n  <p [ngClass]=\"{classone:cone, classtwo:ctwo}\">Change Color</p>\n  <button (click) = \"changeData()\">Click me</button>\n  ",
        styles: [".classone{color:red} .classtwo{background-color:green}"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map