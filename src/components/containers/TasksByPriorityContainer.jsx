import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasksByPriority } from '../../store/tasksSlice.js';
import TasksByPriorityView from '../views/TasksByPriorityView.jsx';
import { useParams } from 'react-router-dom';

const TasksByPriorityContainer = () => {
  const { level } = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasksByPriority(level));
  }, [dispatch, level]);

  return <TasksByPriorityView tasks={tasks} priorityLevel={level} />;
};

export default TasksByPriorityContainer;
