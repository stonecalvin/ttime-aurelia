import {autoinject} from 'aurelia-framework';
import {ApplicationState} from './ApplicationState';

@autoinject
export class Stops {
  heading = 'Choose A Mode';
  selectedRoute = {};

  constructor(private appState: ApplicationState) {
  }

  // TODO: Make sure we have a full list of all the stops AND the prediction data.
  // Server should return an array of objects where each object is a stop and
  // ALL predictions for that stop (in all directions).
  activate(params, routeConfig) {
    this.selectedRoute = params.route;
    this.appState.socket.emit('getScheduleByRoute', this.selectedRoute);
  }

}
