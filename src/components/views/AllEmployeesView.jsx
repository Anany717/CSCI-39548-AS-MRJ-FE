import React from 'react';
import { Link } from 'react-router-dom';

function AllEmployeesView({ employees }) {
  return (
    <div>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            <Link to={`/employees/${employee.id}`}>
              Employee: {employee.firstname} {employee.lastname}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default AllEmployeesView;
