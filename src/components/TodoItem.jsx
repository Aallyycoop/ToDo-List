import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';

const TodoItem = ({ id, taskBody, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <li id={id} className={`list-group-item ${completed && 'list-group-item-success'}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="input-control"
            checked={completed}
            onChange={handleCompleteClick}
          />
          {taskBody}
        </span>
        <button onClick={handleDeleteClick} type="submit" className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
