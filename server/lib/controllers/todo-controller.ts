import * as mongoose from 'mongoose';
import { Request, Response } from 'express';

import { TodoSchema } from '../models/todo-model';
import { RSA_NO_PADDING } from 'constants';


const Todo = mongoose.model('Todo', TodoSchema);

export class TodoController {

  create(req: Request, res: Response) {
    const newTodo = new Todo(req.body);
    newTodo.save((err, todo) => err ? res.send(err) : res.json(todo));
  }

  delete(req: Request, res: Response) {
    Todo.findByIdAndDelete(req.params.todoId, (err, deletedTodo) => err ? res.send(err) : res.json({ message: 'Successfully deleted' }));
  }

  get(req: Request, res: Response) {
    Todo.findById(req.params.todoId, (err, todo) => err ? res.send(err) : res.json(todo));
  }

  getAll(req: Request, res: Response) {
    Todo.find((err, todos) => err ? res.send(err) : res.json(todos));
  }

  update(req: Request, res: Response) {
    Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true }, (err, todo) => err ? res.send(err) : res.json(todo));
  }

}