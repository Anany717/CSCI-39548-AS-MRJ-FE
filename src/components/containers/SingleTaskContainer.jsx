import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SingleTaskView from "../views/SingleTaskView";
import { useEffect } from "react";
import { fetchTasks } from "../../store/tasksSlice";

function SingleTaskContainer() {
  const dispatch = useDispatch();
  let { taskId } = useParams(); //get id from URL
  taskId = parseInt(taskId); //convert to integer
  console.log("taskId", taskId);

  //get task from state based on URL parameter
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id == taskId)
  );

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  console.log("task", task);

  if (!task) return <div>Loading...</div>;
  return <SingleTaskView task={task} />;
}

export default SingleTaskContainer;
