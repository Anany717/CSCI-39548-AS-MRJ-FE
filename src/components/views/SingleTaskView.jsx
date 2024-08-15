import React from 'react';
import { Link } from 'react-router-dom';
import EditTaskForm from '../containers/EditTaskForm.jsx';

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
          </article>
            <EditTaskForm task={task} />
        </section>
      );
}

export default SingleTaskView;
