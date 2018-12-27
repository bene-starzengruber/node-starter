import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import * as config from './config.json';
import { TodoRoutes } from './routes/todo-routes';

class App {

  app: express.Application;
  routes: TodoRoutes;

  constructor() {
    this.app = express();
    this.config();

    this.setupMongoDb();

    this.routes = new TodoRoutes();
    this.routes.routes(this.app);
  }

  private config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private setupMongoDb() {
    mongoose.connect(config.mongodb.url, { useNewUrlParser: true });
  }

}

export default new App().app;