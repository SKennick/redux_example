import {Todo} from './models/todo.models';

export interface AppState {
  readonly todo: Todo[];
}
