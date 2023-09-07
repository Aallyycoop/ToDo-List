import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';
import TotalTodos from './TotalTodos';

const TodosStateTabs = () => {
  const todos = useSelector((state) => state.todos);
  console.log('todos', todos);
  const completedTodos = useSelector((state) => state.todos
    .filter((todo) => todo.completed === true));
  const uncompletedTodos = useSelector((state) => state.todos
    .filter((todo) => todo.completed === false));

  return (
    <Tabs
      defaultActiveKey="allTodos"
      transition={false}
      id="fill-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="allTodos" title="All tasks">
        <TodoList todos={todos} />
        <div className="amount-container all">
          <TotalTodos todos={todos} status="" />
        </div>
      </Tab>
      <Tab eventKey="completedTodos" title="Completed tasks">
        <TodoList todos={completedTodos} />
        <div className="amount-container completed">
          <TotalTodos todos={completedTodos} status="completed" />
        </div>
      </Tab>
      <Tab eventKey="uncompletedTodos" title="Uncompleted tasks">
        <TodoList todos={uncompletedTodos} />
        <div className="amount-container uncompleted">
          <TotalTodos todos={uncompletedTodos} status="uncompleted" />
        </div>
      </Tab>
    </Tabs>
  );
};

export default TodosStateTabs;
