import React from 'react';
// import React, { useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import TodoList from './TodoList';
import TotalTodos from './TotalTodos';
// import { showTasks } from '../redux/todoSlice';

const TodosStateTabs = () => {
  // const dispatch = useDispatch();

  // const todos = JSON.parse(localStorage.getItem('data'));
  // console.log('data', todos);

  // useEffect(() => {
  //   dispatch(showTasks(todos));
  // }, [dispatch, todos]);

  // const completedTodos = todos.filter((todo) => todo.completed === true);
  // const uncompletedTodos = todos.filter((todo) => todo.completed === false);

  const todos = useSelector((state) => state.todos);
  console.log('todos', todos);
  const completedTodos = useSelector((state) => state.todos
    .filter((todo) => todo.completed === true));
  const uncompletedTodos = useSelector((state) => state.todos
    .filter((todo) => todo.completed === false));

  return (
    <div>
      <Tabs
        defaultActiveKey="allTodos"
        transition={false}
        id="fill-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="allTodos" title="All tasks">
          <div className="amount-container all">
            <TotalTodos todos={todos} status="" />
          </div>
          <TodoList todos={todos} />
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
