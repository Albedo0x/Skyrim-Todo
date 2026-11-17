import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../interface/interfaces";

const initialState: AppState = (() => {
  try {
    const savedState = localStorage.getItem("test");
    return savedState ? (JSON.parse(savedState) as AppState) : [];
  } catch (error) {
    console.error("Could not read the saved quest journal. Starting with an empty journal.", error);
    return [];
  }
})();

const toolkitSlice = createSlice({
  name: "tookit",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<{ id: string; value: string }>) {
      state.push({
        todoId: `${action.payload.id}-${Date.now()}`,
        todoName: action.payload.value,
        todoDescription: `This is ${action.payload.value} to do`,
        todoStatus: false,
        todos: [],
      });
    },
    removeTodo(state, action: PayloadAction<{ taskId: string }>) {
      return state.filter((todo) => todo.todoId !== action.payload.taskId);
    },
    checkTodo(state, action: PayloadAction<{ todoId: string }>) {
      const quest = state.find((item) => item.todoId === action.payload.todoId);
      if (quest) quest.todoStatus = !quest.todoStatus;
    },
    addItem(state, action: PayloadAction<{ taskId: string; value: string }>) {
      const quest = state.find((item) => item.todoId === action.payload.taskId);
      if (quest && action.payload.value.trim()) {
        quest.todos.push({
          id: Date.now(),
          status: false,
          text: action.payload.value.trim(),
        });
      }
    },
    deleteItem(state, action: PayloadAction<{ todoId: string; taskId: number }>) {
      const quest = state.find((item) => item.todoId === action.payload.todoId);
      if (quest) {
        quest.todos = quest.todos.filter((item) => item.id !== action.payload.taskId);
      }
    },
    checkItem(state, action: PayloadAction<{ todoId: string; taskId: number }>) {
      const quest = state.find((item) => item.todoId === action.payload.todoId);
      if (!quest) return;
      const index = quest.todos.findIndex((item) => item.id === action.payload.taskId);
      if (index === -1) return;
      const [task] = quest.todos.splice(index, 1);
      task.status = !task.status;
      if (task.status) quest.todos.push(task);
      else quest.todos.unshift(task);
    },
    editHeader(state, action: PayloadAction<{ todoId: number; valueName: string }>) {
      if (state[action.payload.todoId]) state[action.payload.todoId].todoName = action.payload.valueName;
    },
    editDescription(state, action: PayloadAction<{ todoId: number; valueDesc: string }>) {
      if (state[action.payload.todoId]) state[action.payload.todoId].todoDescription = action.payload.valueDesc;
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
  checkTodo,
  editHeader,
  editDescription,
} = toolkitSlice.actions;
