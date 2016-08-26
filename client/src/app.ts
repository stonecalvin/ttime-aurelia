import {Router, RouterConfiguration} from 'aurelia-router';
import {ApplicationState} from './ApplicationState';
import {autoinject} from 'aurelia-framework';

@autoinject
export class App {
  router: Router;
  state: ApplicationState;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'],    name: 'home',         moduleId: 'home',         nav: true,  title: 'Home' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true,  title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true,  title: 'Child Router' },
      { route: 'welcome',       name: 'welcome',      moduleId: 'welcome',      nav: true,  title: 'Welcome' },
      { route: 'stops',         name: 'stops',        moduleId: 'stops',        nav: false, title: 'Stops' }
    ]);

    this.router = router;
  }

// Fire the constructor to start the socket io stuff.
// This is a hack, fix this future me.
  constructor(private appState: ApplicationState) {
    this.state = appState;
  }
}
