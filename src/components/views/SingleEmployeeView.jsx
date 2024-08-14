import React from 'react';
import { Link } from 'react-router-dom';
import EditEmployeeForm from './EditEmployeeForm';

const SingleEmployeeView = ({ employee, tasks }) => {
  if (!employee) return <div>Loading...</div>;

  return (
    <div>
      <h2>{employee.firstname} {employee.lastname}</h2>
      <p>Department: {employee.department}</p>
      <h3>Assigned Tasks:</h3>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <Link to={`/tasks/${task.id}`}>{task.content}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks assigned to this employee.</p>
      )}
      <EditEmployeeForm employee={employee} />
    </div>
  );
};

export default SingleEmployeeView;
