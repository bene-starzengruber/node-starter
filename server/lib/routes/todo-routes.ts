import { Request, Response, Application } from 'express';

export class TodoRoutes {

  routes(app: Application) {

    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({ message: 'GET request received!' })
    });

    app.route('/todo').get(this.getAll).post(this.create);
    app.route('/todo/:todoId').get(this.get).put(this.update).delete(this.delete);

  }

  private create(req: Request, res: Response) {
    res.status(200).send({ message: 'create' });
  }

  private delete(req: Request, res: Response) {
    res.status(200).send({ message: 'delete' });
  }

  private get(req: Request, res: Response) {
    res.status(200).send({ message: 'get' });
  }

  private getAll(req: Request, res: Response) {
    res.status(200).send({ message: 'getAll' });
  }

  private update(req: Request, res: Response) {
    res.status(200).send({ message: 'update' });
  }

}