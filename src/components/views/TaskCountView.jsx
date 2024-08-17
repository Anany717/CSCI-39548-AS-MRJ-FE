import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTaskCount } from '../../store/tasksSlice';

const TaskCountView = () => {
  const dispatch = useDispatch();
  const taskCount = useSelector(state => state.tasks.taskCount);

  useEffect(() => {
    dispatch(fetchTaskCount());
  }, [dispatch]);

  return <div>Total Tasks: {taskCount}</div>;
};

export default TaskCountView;
