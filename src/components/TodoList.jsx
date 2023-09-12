import React from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
// import { getTodosAsync } from '../redux/todoSlice';
// import { showTasks } from '../redux/todoSlice';

const TodoList = ({ todos }) => (
  // const dispatch = useDispatch();

  // const todos = useSelector((state) => state.todos);
  // console.log(todos);

  // useEffect(() => {
  //   dispatch(getTodosAsync());
  // }, [dispatch]);
  // const data = JSON.parse(localStorage.getItem('data'));
  // console.log('data', data);

  // useEffect(() => {
  //   dispatch(showTasks(data));
  // });

  <ul className="list-group">
    {todos.map(({
      id,
      taskBody,
      completed,
    }) => (
      <TodoItem
        key={id}
        id={id}
        taskBody={taskBody}
        completed={completed}
      />
    ))}
  </ul>
);

export default TodoList;
