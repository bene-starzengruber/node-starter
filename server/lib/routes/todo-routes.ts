import { Request, Response, Application } from 'express';
import { TodoController } from '../controllers/todo-controller';

export class TodoRoutes {

  controller = new TodoController();

  routes(app: Application) {

    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.route('/').get((req: Request, res: Response) => res.status(200).send({ message: 'GET request received!' }));

    app.route('/todo').get(this.controller.getAll).post(this.controller.create);
    app.route('/todo/:todoId').get(this.controller.get).put(this.controller.update).delete(this.controller.delete);

  }

}