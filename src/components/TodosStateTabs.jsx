import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';
import TotalTodos from './TotalTodos';

const filterTodosByChangeTime = (todos, status) => (
  todos.filter(((todo) => todo.completed === status))
    .sort((a, b) => a.changeTime - b.changeTime)
);

const TodosStateTabs = () => {
  const todos = useSelector((state) => state.todos);
  const completedTodos = filterTodosByChangeTime(todos, true);
  const uncompletedTodos = filterTodosByChangeTime(todos, false);
  const sortedTodos = [...uncompletedTodos, ...completedTodos];

  return (
    <div className="tasks-container">
      <Tabs
        defaultActiveKey="allTodos"
        transition={false}
        id="fill-tab-example"
        className="mb-3 tabs-head"
        justify
      >
        <Tab eventKey="allTodos" title="All tasks">
          <div className="amount-container all">
            <TotalTodos todos={sortedTodos} status="" />
          </div>
          <TodoList todos={sortedTodos} />
        </Tab>
        <Tab eventKey="completedTodos" title="Completed tasks">
          <div className="amount-container completed">
            <TotalTodos todos={completedTodos} status="completed" />
          </div>
          <TodoList todos={completedTodos} />
        </Tab>
        <Tab eventKey="uncompletedTodos" title="Uncompleted tasks">
          <div className="amount-container uncompleted">
            <TotalTodos todos={uncompletedTodos} status="uncompleted" />
          </div>
          <TodoList todos={uncompletedTodos} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TodosStateTabs;
