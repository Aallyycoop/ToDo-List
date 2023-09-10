import React from 'react';
import { useFormik } from 'formik';
import {
  Form, Button,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
// import { addTodoAsync } from '../redux/todoSlice';
// import store from '../redux/store';

const AddTodoForm = () => {
  // const [value, setValue] = useState('');
  const dispatch = useDispatch();

  // console.log('store', store.getState());

  const formik = useFormik({
    initialValues: {
      taskBody: '',
    },
    onSubmit: ({ taskBody }) => {
      dispatch(addTodo({
        taskBody,
      }));
      formik.resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="form-inline mt-3 mb-3">
      <Form.Group className="input-group">
        <Form.Control
          onChange={formik.handleChange}
          value={formik.values.taskBody}
          name="taskBody"
          placeholder="Add todo..."
          className="mb-2 mr-sm-2"
          autoFocus
        />
        <Button type="submit" variant="group-vertical" className="btn mb-2 btn-add">Add</Button>
        <Form.Label htmlFor="taskBody" hidden>Name</Form.Label>
      </Form.Group>
    </Form>
  );
};

export default AddTodoForm;
