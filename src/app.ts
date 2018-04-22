import { Router } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'pages/home' },
      { route: 'test', name: 'test', moduleId: 'pages/test' }
    ]);
  }
}