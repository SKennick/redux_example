import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo.models';
import {Observable} from 'rxjs/index';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos = store.select('todo');
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(new TodoActions.RemoveTodo(todo));
  }

  ngOnInit() {
  }

}
