define(["require", "exports"], function (require, exports) {
    "use strict";
    var ApplicationState = (function () {
        function ApplicationState() {
            this.routes = [];
            this.stops = {};
            this.socket = io.connect("http://localhost:3000");
            this.socket.on('routes', function (routes) {
                this.routes = routes.mode;
            }.bind(this));
            this.socket.on('scheduleByRoute', function (stopsByRoute) {
                this.stops[stopsByRoute.route] = stopsByRoute.stops;
            }.bind(this));
        }
        return ApplicationState;
    }());
    exports.ApplicationState = ApplicationState;
});

//# sourceMappingURL=ApplicationState.js.map
