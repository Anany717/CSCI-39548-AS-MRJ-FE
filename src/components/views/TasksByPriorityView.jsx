import React from 'react';

const TasksByPriorityView = ({ tasks, priorityLevel }) => {
  return (
    <div>
      <h2>Tasks with Priority: {priorityLevel}</h2>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <div key={task.id}>
            <h3>{task.content}</h3>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
          </div>
        ))
      ) : (
        <p>No tasks found with this priority level.</p>
      )}
    </div>
  );
};

export default TasksByPriorityView;
