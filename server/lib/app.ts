import * as express from 'express';
import * as bodyParser from 'body-parser';

import { TodoRoutes } from './routes/todo-routes';

class App {

  app: express.Application;
  routes: TodoRoutes;

  constructor() {
    this.app = express();
    this.config();

    this.routes = new TodoRoutes();
    this.routes.routes(this.app);
  }

  private config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

}

export default new App().app;