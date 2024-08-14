import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeeById } from '../employeesSlice';
import SingleEmployeeView from './SingleEmployeeView';
import { useParams } from 'react-router-dom';

const SingleEmployeeContainer = () => {
  const { employeeId } = useParams();
  const dispatch = useDispatch();

  const employee = useSelector(state => state.employees.find(emp => emp.id === +employeeId));
  const tasks = useSelector(state => state.tasks.filter(task => task.employeeId === +employeeId));

  useEffect(() => {
    dispatch(fetchEmployeeById(employeeId));
  }, [dispatch, employeeId]);

  return <SingleEmployeeView employee={employee} tasks={tasks} />;
};

export default SingleEmployeeContainer;
