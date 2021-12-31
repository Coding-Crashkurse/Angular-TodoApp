import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private loggingservice: LoggingService) {}

  newTodo = '';

  log(obj: any) {
    this.loggingservice.log(obj);
  }

  setTodo(event: KeyboardEvent) {
    this.newTodo = (event.target as HTMLInputElement).value;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  storeTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo() {
    if (this.newTodo.trim() === '') {
      return;
    }
    this.todos.push({ todo: this.newTodo, done: false });
    this.log(this.todos);
    this.storeTodos();
  }

  openTodosCount() {
    const done = this.todos.filter((item) => {
      return !item.done;
    });
    return done;
  }

  title = 'todoapp';

  toggleTodo(index: number) {
    this.todos[index].done = !this.todos[index].done;
    this.storeTodos();
  }

  deleteIndex(index: number) {
    this.todos.splice(index, 1);
    this.storeTodos();
  }

  ngOnInit(): void {
    let data = localStorage.getItem('todos');
    if (data !== '' && data !== null) {
      this.todos = JSON.parse(data);
    } else {
      this.todos = [];
    }
  }
}
