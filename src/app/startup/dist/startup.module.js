"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StartupPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var startup_routing_module_1 = require("./startup-routing.module");
var startup_page_1 = require("./startup.page");
var angular_2 = require("swiper_angular");
var StartupPageModule = /** @class */ (function () {
    function StartupPageModule() {
    }
    StartupPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                startup_routing_module_1.StartupPageRoutingModule,
                angular_2.SwiperModule
            ],
            declarations: [startup_page_1.StartupPage]
        })
    ], StartupPageModule);
    return StartupPageModule;
}());
exports.StartupPageModule = StartupPageModule;
