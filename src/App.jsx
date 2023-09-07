import React from 'react';
import { Container } from 'react-bootstrap';

import AddTodoForm from './components/AddTodoForm';
// import TodoList from './components/TodoList';
// import TotalCompleteItems from './components/TotalTodos';
import TodosStateTabs from './components/TodosStateTabs';

const App = () => (
  <Container className="bg-white p-4 mt-5">
    <h1>My Todo List</h1>
    <AddTodoForm />
    <TodosStateTabs />
    {/* <TodoList /> */}
    {/* <TotalCompleteItems /> */}
  </Container>
);

export default App;
