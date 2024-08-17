import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeeCount } from '../../store/employeesSlice.js';
import EmployeeCountView from '../views/EmployeeCountView.jsx'; 

const EmployeeCountContainer = () => {
  const dispatch = useDispatch();
  const employeeCount = useSelector(state => state.employees.employeeCount);

  useEffect(() => {
    dispatch(fetchEmployeeCount());
  }, [dispatch]);

  return <EmployeeCountView employeeCount={employeeCount} />;
};

export default EmployeeCountContainer;
