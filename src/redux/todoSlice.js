import { createSlice } from '@reduxjs/toolkit';

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

const initialState = []; // { taskBody, id, completed(true/false) }

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        taskBody: action.payload.taskBody,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => (
      state.filter((todo) => todo.id !== action.payload.id)
    ),
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

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
