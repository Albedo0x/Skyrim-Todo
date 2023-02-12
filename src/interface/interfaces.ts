export interface ITodoItem {
  id: number;
  status: boolean;
  text: string;
}

export interface TodoState {
  todoId: string;
  todoName: string;
  todoDescription: string;
  todoStatus: boolean;
  todos: Array<ITodoItem>;
}

export type AppState = Array<TodoState>;
