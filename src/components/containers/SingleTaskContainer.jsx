import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTaskById } from '../tasksSlice';
import SingleTaskView from './SingleTaskView';
import { useParams } from 'react-router-dom';

const SingleTaskContainer = () => {
  const { taskId } = useParams();
  const dispatch = useDispatch();

  const task = useSelector(state => state.tasks.find(tsk => tsk.id === +taskId));
  const employee = useSelector(state => state.employees.find(emp => emp.id === task?.employeeId));

  useEffect(() => {
    dispatch(fetchTaskById(taskId));
  }, [dispatch, taskId]);

  return <SingleTaskView task={task} employee={employee} />;
};

export default SingleTaskContainer;
