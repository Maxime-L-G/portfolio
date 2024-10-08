import Router from './router';
import Home from './controllers/Home';

import './output.css';

const routes = [{
  url: '/home',
  controller: Home
}];

new Router(routes);
