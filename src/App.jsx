import React from 'react';

import AddTodoForm from './components/AddTodoForm';
// import TodoList from './components/TodoList';
// import TotalCompleteItems from './components/TotalTodos';
import TodosStateTabs from './components/TodosStateTabs';

const App = () => (
  <div className="d-flex flex-column h-100 container todo-container">
    <h1>To-Do List</h1>
    <AddTodoForm />
    <TodosStateTabs />
    {/* <TodoList /> */}
    {/* <TotalCompleteItems /> */}
  </div>
);

export default App;
