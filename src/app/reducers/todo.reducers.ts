import { Action } from '@ngrx/store';
import { Todo } from '../models/todo.models';
import * as TodoActions from '../actions/todo.actions';

// Section 1
const initialTodo: Todo = {
  description: 'Initial Todo',
  status: 'PENDING'
};

export function reducer(state: Todo[] = [initialTodo], action: TodoActions.Actions) {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return [...state, action.payload];
    case TodoActions.REMOVE_TODO:
      const index = state.indexOf(action.payload, 0);
      state.splice(index, 1);
      return state;
    default:
      return state;
  }
}
