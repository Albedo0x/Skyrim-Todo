import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../interface/interfaces";

const initialState: AppState = JSON.parse(localStorage.getItem("test") || "");

const toolkitSlice = createSlice({
  name: "tookit",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<{ id: string; value: string }>) {
      state.push({
        todoId: `${action.payload.id}-${Date.now()}`,
        todoName: `${action.payload.value}`,
        todoDescription: `This is ${action.payload.value} to do`,
        todoStatus: false,
        todos: [],
      });
    },
    removeTodo(state, action: PayloadAction<{ taskId: string }>) {
      return state.filter((todo) => todo.todoId !== action.payload.taskId);
    },
    checkTodo(
      state,
      action: PayloadAction<{
        todoId: string;
      }>
    ) {
      state.map((elem) => {
        if (elem.todoId === action.payload.todoId) {
          elem.todoStatus = !elem.todoStatus;
        }
        return elem;
      });
    },
    addItem(
      state,
      action: PayloadAction<{
        taskId: string;
        value: string;
      }>
    ) {
      state
        .find((elem) => elem.todoId === action.payload.taskId)!
        .todos.push({
          id: Date.now() / 2,
          status: false,
          text: action.payload.value,
        });
    },
    deleteItem(
      state,
      action: PayloadAction<{
        todoId: string;
        taskId: number;
      }>
    ) {
      state.map((elem) => {
        if (elem.todoId === action.payload.todoId) {
          elem.todos.splice(
            elem.todos.findIndex((item) => item.id === action.payload.taskId),
            1
          );
        }
        return elem;
      });
    },
    checkItem(
      state,
      action: PayloadAction<{
        todoId: string;
        taskId: number;
      }>
    ) {
      state.map((elem) => {
        if (elem.todoId === action.payload.todoId) {
          elem.todos.map((todo, index) => {
            if (todo.id === action.payload.taskId) {
              todo.status = !todo.status;
              elem.todos.splice(index, 1);
              if (todo.status) {
                elem.todos.push({
                  id: Date.now() / 2,
                  status: todo.status,
                  text: todo.text,
                });
              } else {
                elem.todos.unshift({
                  id: Date.now() / 2,
                  status: todo.status,
                  text: todo.text,
                });
              }
            }
            return todo;
          });
        }
        return elem;
      });
    },
    editHeader(
      state,
      action: PayloadAction<{
        todoId: number;
        valueName: string;
      }>
    ) {
      state[action.payload.todoId].todoName = action.payload.valueName;
    },
    editDescription(
      state,
      action: PayloadAction<{
        todoId: number;
        valueDesc: string;
      }>
    ) {
      state[action.payload.todoId].todoDescription = action.payload.valueDesc;
    },
  },
});

export default toolkitSlice.reducer;
export const {
  addTodo,
  removeTodo,
  addItem,
  deleteItem,
  checkItem,
  editHeader,
  editDescription,
} = toolkitSlice.actions;
