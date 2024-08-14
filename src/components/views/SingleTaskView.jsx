import React from 'react';
import { Link } from 'react-router-dom';
import EditTaskForm from './EditTaskForm';

function SingleTaskView({task}) {
    if (!task) {
        return (
          <section>
            <h2>Task not found!</h2>
          </section>
        );
      }

      let priorities = ["Low", "Medium", "High"];
    
      return (
        <section>
          <article>
            <h2>{task.content}</h2>
            <p>Priority: {priorities[task.priority-1]}</p>
              <p>Status: {task.completed ? 'Completed' : 'Not Completed'}</p>
      <p>
        Assigned to: {employee ? (
          <Link to={`/employees/${employee.id}`}>{employee.firstname} {employee.lastname}</Link>
        ) : (
          "Unassigned"
        )
            </p>
          </article>
            <EditTaskForm task={task} />
        </section>
      );
}

export default SingleTaskView;
