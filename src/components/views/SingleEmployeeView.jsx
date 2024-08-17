import React from 'react';
import EditEmployeeForm from '../containers/EditEmployeeForm';

function SingleEmployeeView({ employee }) {
  return (
    <div>
      <h2>{employee.firstname} {employee.lastname}</h2>
      <p>Department: {employee.department}</p>
      
      <h3>Assigned Tasks:</h3>
      {employee.Tasks && employee.Tasks.length > 0 ? (
        <ul>
          {employee.Tasks.map(task => (
            <li key={task.id}>{task.content} (Priority: {task.priority})</li>
          ))}
        </ul>
      ) : (
        <p>No tasks assigned to this employee.</p>
      )}

      {/* Include the existing EditEmployeeForm component */}
      <EditEmployeeForm employee={employee} />
    </div>
  );
}

export default SingleEmployeeView;
