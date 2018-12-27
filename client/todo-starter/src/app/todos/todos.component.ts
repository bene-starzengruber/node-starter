import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap, switchMap, takeUntil } from 'rxjs/operators';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {

  addTodoText: string = '';
  todos$: Observable<Todo[]>;

  private loadTodos$ = new Subject();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos$ = this.loadTodos$.pipe(switchMap(() => this.todoService.getTodos()));
    setTimeout(() => this.loadTodos$.next());
  }

  addTodo() {
    const text = this.addTodoText.trim();
    if (!text.length) return;

    const todo = new Todo(undefined, text, Date.now() + 3600 * 24 * 2);

    this.todoService.createTodo(todo).subscribe(created => {
      this.loadTodos$.next();
      this.addTodoText = '';
    });
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(deleted => this.loadTodos$.next());
  }

}
