import React from 'react';

const TotalTodos = ({ todos, status }) => (
  <h4 className="mt-3">
    Total
    {' '}
    {status}
    {' '}
    Items:
    {' '}
    {todos.length}
  </h4>
);

export default TotalTodos;
