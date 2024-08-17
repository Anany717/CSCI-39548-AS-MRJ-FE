import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIncompleteTasks } from '../../store/tasksSlice.js';
import IncompleteTasksView from '../views/IncompleteTasksView.jsx';

const IncompleteTasksContainer = () => {
  const dispatch = useDispatch();
  const incompleteTasks = useSelector(state => state.tasks.incompleteTasks);

  useEffect(() => {
    dispatch(fetchIncompleteTasks());
  }, [dispatch]);

  return <IncompleteTasksView tasks={incompleteTasks} />;
};

export default IncompleteTasksContainer;
