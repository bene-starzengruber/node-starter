import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todos/todo';
import { } from 'selenium-webdriver';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;

  @Output() delete = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  deleteTodo() {
    this.delete.next(this.todo);
  }

}
