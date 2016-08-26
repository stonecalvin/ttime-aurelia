declare var io : {
  connect(url: string): Socket;
}

interface Socket {
  on(event: string, callback: (data: any) => void );
  emit(event: string, data: any);
}

export class ApplicationState {
  socket: Socket;
  routes = [];
  stops = {};

  constructor() {
    this.socket = io.connect("http://localhost:3000");

    this.socket.on('routes', function(routes) {
      this.routes = routes.mode;
    }.bind(this));

    this.socket.on('scheduleByRoute', function(stopsByRoute) {
      this.stops[stopsByRoute.route] = stopsByRoute.stops;
    }.bind(this));
  }
}
