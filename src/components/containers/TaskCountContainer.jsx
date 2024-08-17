import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTaskCount } from '../../store/tasksSlice.js';
import TaskCountView from '../views/TaskCountView.jsx';

const TaskCountContainer = () => {
  const dispatch = useDispatch();
  const taskCount = useSelector(state => state.tasks.taskCount);

  useEffect(() => {
    dispatch(fetchTaskCount());
  }, [dispatch]);

  return <TaskCountView taskCount={taskCount} />;
};

export default TaskCountContainer;
