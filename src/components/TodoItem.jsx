import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
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
    <li id={id} className={`list-group-item p-0 ${completed && 'list-group-item-success'}`}>
      <div className="d-flex justify-content-between">
        <Button onClick={handleCompleteClick} type="button" className="task-body border-0 m-0" variant="group-vertical">
          <span>{taskBody}</span>
        </Button>
        {/* <span className="d-flex align-items-center"> */}
        {/* <input
          type="checkbox"
          className="input-control"
          checked={completed}
          onChange={handleCompleteClick}
        /> */}
        {/* {taskBody} */}
        {/* </span> */}
        <Button onClick={handleDeleteClick} type="submit" className="border-0 btn-link">x</Button>
      </div>
    </li>
  );
};

export default TodoItem;
