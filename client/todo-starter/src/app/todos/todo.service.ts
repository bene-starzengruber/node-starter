import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo } from './todo';

@Injectable()
export class TodoService {

  private readonly BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createTodo(todo: Todo) {
    const url = `${this.BASE_URL}/todo`;
    return this.http.post(url, todo);
  }

  deleteTodo(todo: Todo) {
    const url = `${this.BASE_URL}/todo/${todo.id}`;
    return this.http.delete(url);
  }

  getTodos(): Observable<Todo[]> {
    const url = `${this.BASE_URL}/todo`;
    return this.http.get(url).pipe(
      map((rawTodos: any[]) => rawTodos.map(rawTodo => new Todo(rawTodo._id, rawTodo.text, rawTodo.deadline)))
    );
  }
}
