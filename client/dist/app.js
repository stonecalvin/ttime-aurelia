var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", './ApplicationState', 'aurelia-framework'], function (require, exports, ApplicationState_1, aurelia_framework_1) {
    "use strict";
    var App = (function () {
        function App(appState) {
            this.appState = appState;
            this.state = appState;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'Home' },
                { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
                { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
                { route: 'welcome', name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
                { route: 'stops', name: 'stops', moduleId: 'stops', nav: false, title: 'Stops' }
            ]);
            this.router = router;
        };
        App = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [ApplicationState_1.ApplicationState])
        ], App);
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=app.js.map
