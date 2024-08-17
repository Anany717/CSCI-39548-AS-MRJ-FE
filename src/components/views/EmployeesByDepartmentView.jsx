import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeesByDepartment } from '../../store/employeesSlice';

const EmployeesByDepartmentView = ({ department }) => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.employeesByDepartment);

  useEffect(() => {
    dispatch(fetchEmployeesByDepartment(department));
  }, [dispatch, department]);

  return (
    <div>
      <h1>Employees in {department}</h1>
      {employees.map(emp => (
        <div key={emp.id}>
          <h2>{emp.firstname} {emp.lastname}</h2>
        </div>
      ))}
    </div>
  );
};

export default EmployeesByDepartmentView;
