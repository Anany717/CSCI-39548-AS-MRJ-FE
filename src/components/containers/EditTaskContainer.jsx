import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, editTask } from "../../store/tasksSlice";
import { fetchEmployees } from "../../store/employeesSlice";
import { useEffect, useState } from "react";

import EditTaskView from "../views/EditTaskView";

function EditTaskContainer() {
  let { taskId } = useParams(); //get id from URL
  taskId = parseInt(taskId); //convert to integer

  const dispatch = useDispatch();

  const [taskDetails, setTaskDetails] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  //get task from state based on URL parameter
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === taskId)
  );
  //get employees for dropdown
  const employees = useSelector((state) => state.employees);

  const handleSubmit = (e) => {
    // Prevent server submission
    e.preventDefault();

    Object.keys(taskDetails).forEach((key) => {
      console.log("key", `-${key}-`);

      if (["completed", "content", "priority"].includes(key)) {
        // console.log("checking key", key);
        validate(key, taskDetails[key]);
      }
    });
    if (Object.values(errors).some((error) => error)) {
      console.log("Form has errors", errors);
      return;
    }

    // Get data from form
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // Create the task object and dispatch the `addTask` thunk
    const updates = {
      ...task,
      content: formJson.taskContent,
      priority: parseInt(formJson.taskPriority),
      completed: formJson.completed === "true" ? true : false,
      employeeId: JSON.parse(formJson.employeeId),
    };

    dispatch(editTask(updates));

    alert("Task updated!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({
      ...taskDetails,
      [name]: value,
    });
    validate(name, value);
  };

  const validate = (name, value) => {
    let error = "";
    console.log("name", name);
    console.log("value", value);

    if (!value) {
      error = "This field is required";
    } else if (value.length < 2) {
      error = "This field must be at least 2 characters long";
    } else if (value.length > 20) {
      error = "This field must not exceed 20 characters";
    }
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  return (
    <EditTaskView
      task={task}
      employees={employees}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
}

export default EditTaskContainer;
