import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
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
