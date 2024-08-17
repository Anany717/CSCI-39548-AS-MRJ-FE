import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIncompleteTasks } from '../../store/tasksSlice';

const IncompleteTasksView = () => {
  const dispatch = useDispatch();
  const incompleteTasks = useSelector(state => state.tasks.incompleteTasks);

  useEffect(() => {
    dispatch(fetchIncompleteTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>Incomplete Tasks</h1>
      {incompleteTasks.map(task => (
        <div key={task.id}>
          <h2>{task.content}</h2>
          <p>Priority: {task.priority}</p>
        </div>
      ))}
    </div>
  );
};

export default IncompleteTasksView;
