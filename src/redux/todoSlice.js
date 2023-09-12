import { createSlice, current } from '@reduxjs/toolkit';

// export const getTodosAsync = createAsyncThunk(
//   'todos/getTodosAsync',
//   async () => {
//     const response = await fetch('http://localhost:7000/todos');
//     if (response.ok) {
//       // console.log('response', response);
//       const todos = await response.json();
//       // console.log('todos', todos);
//       return { todos };
//     }
//     return {};
//   },
// );

// export const addTodoAsync = createAsyncThunk(
//   'todos/addTodoAsync',
//   async (payload) => {
//     const response = await fetch('http://localhost:7000/todos', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ title: payload.title }),
//     });
//     if (response.ok) {
//       const todo = await response.json();
//       return { todo };
//     }
//     return {};
//   },
// );

// const saveData = (state) = (
//   localStorage.setItem('data', JSON.stringify(state));
// );

const data = localStorage.getItem('data') !== null ? JSON.parse(localStorage.getItem('data')) : [];

const initialState = data; // { taskBody, id, completed(true/false), changeTime }

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        taskBody: action.payload.taskBody,
        completed: false,
        changeTime: null,
      };
      state.push(newTodo);
      localStorage.setItem('data', JSON.stringify(current(state)));
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      state[index].completed = action.payload.completed;

      state[index].changeTime = action.payload.changeTime;

      localStorage.setItem('data', JSON.stringify(current(state)));
    },
    deleteTodo: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem('data', JSON.stringify(state));
      return state;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getTodosAsync.fulfilled, (state, action) => (
  //       action.payload.todos
  //     ))
  //     .addCase(addTodoAsync.fulfilled, (state, action) => {
  //       state.push(action.payload.todo);
  //     });
  // },
});

export const {
  addTodo, toggleComplete, deleteTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
