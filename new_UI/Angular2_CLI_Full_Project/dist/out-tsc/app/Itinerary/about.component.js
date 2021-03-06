var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Component({
        selector: 'about',
        templateUrl: './about.component.html',
        styles: ["\n    body, html {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgb(255, 252, 248);\n    }\n    .mainpg{\n      margin: 0;\n      padding: 0;\n    }\n    .cover{\n      color: rgb(255, 255, 255);\n      position: relative;\n      height: 60em;\n      background: url(\"../img/background.jpeg\") no-repeat scroll 0px 100% / cover transparent;\n    }\n    .space {\n      height : 24em;\n    }\n    .space-2 {\n      height : 23em;\n    }\n    .heading {\n      font-size: 60px;\n      color: white;\n    }\n    .section3 {\n      padding-top : 30px;\n    }\n    .text-black {\n      color: black;\n    }\n    .text-white {\n      color: white;\n    }\n    .icons {\n      padding-top: 80px;\n    }\n    #footer {\n      margin-top : 100px;\n      text-align : center;\n      margin-bottom : 35px;\n    }\n    "],
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
export { AboutComponent };
//# sourceMappingURL=../../../../src/app/Itinerary/about.component.js.map