import { Component, OnInit } from '@angular/core';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addTodo(description, status) {
    this.store.dispatch(new TodoActions.AddTodo({description: description, status: status}));
  }

  ngOnInit() {
  }
}
