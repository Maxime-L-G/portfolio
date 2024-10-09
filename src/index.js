import Router from './router';
import Home from './controllers/Home';

import './output.css';

const routes = [{
  url: '/',
  controller: Home
}];

new Router(routes);
