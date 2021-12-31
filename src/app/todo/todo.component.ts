import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  @Input() todo: Todo = { todo: '', done: false };
  @Input() index: number = 0;

  @Output() todoindex = new EventEmitter<number>();
  @Output() deleteindex = new EventEmitter<number>();

  toggleTodo() {
    this.todoindex.emit(this.index);
  }

  deleteIndex() {
    this.deleteindex.emit(this.index);
  }

  ngOnInit(): void {}
}
