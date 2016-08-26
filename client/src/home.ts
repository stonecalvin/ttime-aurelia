import {autoinject} from 'aurelia-framework';
import {ApplicationState} from './ApplicationState';

@autoinject
export class Home {
  heading = 'Choose A Mode';
  routes = [];

  constructor(private appState: ApplicationState) {
    this.routes = appState.routes;
  }
}
