import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeesByDepartment } from '../../store/employeesSlice.js';
import EmployeesByDepartmentView from '../views/EmployeesByDepartmentView.jsx';
import { useParams } from 'react-router-dom';

const EmployeesByDepartmentContainer = () => {
  const { department } = useParams();
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employeesByDepartment);

  useEffect(() => {
    dispatch(fetchEmployeesByDepartment(department));
  }, [dispatch, department]);

  return <EmployeesByDepartmentView employees={employees} department={department} />;
};

export default EmployeesByDepartmentContainer;
