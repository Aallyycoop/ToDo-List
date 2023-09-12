import React from 'react';
import { useFormik } from 'formik';
import {
  Form, Button,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { addTodo } from '../redux/todoSlice';
// import { addTodoAsync } from '../redux/todoSlice';
// import store from '../redux/store';

const schema = yup.object().shape({
  taskBody: yup
    .string()
    .trim()
    .required('Write a task')
    .min(3, 'Minimum 3 characters required'),
});

const AddTodoForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taskBody: '',
    },
    validationSchema: schema,
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
          isInvalid={(formik.errors.taskBody && formik.touched.taskBody)}
          autoFocus
        />
        <Button type="submit" variant="group-vertical" className="btn mb-2 btn-add">Add</Button>
        <Form.Control.Feedback type="invalid" className="invalid-tooltip invalid-feedback">{formik.errors.taskBody}</Form.Control.Feedback>
        <Form.Label htmlFor="taskBody" hidden>Name</Form.Label>
      </Form.Group>
    </Form>
  );
};

export default AddTodoForm;
