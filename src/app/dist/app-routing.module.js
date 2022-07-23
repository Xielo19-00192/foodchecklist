"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: 'login',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./login/login.module'); }).then(function (m) { return m.LoginPageModule; }); }
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'register',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./register/register.module'); }).then(function (m) { return m.RegisterPageModule; }); }
    },
    {
        path: 'startup',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./startup/startup.module'); }).then(function (m) { return m.StartupPageModule; }); }
    },
    {
        path: 'stock',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./stock/stock.module'); }).then(function (m) { return m.StockPageModule; }); }
    },
    {
        path: 'shoppinglist',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./shoppinglist/shoppinglist.module'); }).then(function (m) { return m.ShoppinglistPageModule; }); }
    },
    {
        path: 'expiry',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./expiry/expiry.module'); }).then(function (m) { return m.ExpiryPageModule; }); }
    },
    {
        path: 'aboutus',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./aboutus/aboutus.module'); }).then(function (m) { return m.AboutusPageModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
