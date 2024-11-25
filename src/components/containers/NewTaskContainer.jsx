import NewTaskView from "../views/NewTaskView";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addTask } from "../../store/tasksSlice";
import { fetchEmployees } from "../../store/employeesSlice";

function NewTaskContainer() {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const [taskDetails, setTaskDetails] = useState({
    taskContent: null,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    // Prevent server submission
    e.preventDefault();

    // Validate form fields
    const newErrors = {};
    Object.keys(taskDetails).forEach((key) => {
      if (["taskContent"].includes(key)) {
        validate(key, taskDetails[key]);
        if (!taskDetails[key]) {
          newErrors[key] = "This field is required";
        }
      }
    });

    // Update errors state
    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      console.log("Form has errors", newErrors);
      return;
    }

    // Get data from form
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // Create the task object and dispatch the `addTask` thunk
    const newTask = {
      content: formJson.taskContent,
      priority: parseInt(formJson.taskPriority),
      employeeId: JSON.parse(formJson.employeeId),
    };

    const response = await dispatch(addTask(newTask));
    console.log("response", response);

    if (response.meta.requestStatus === "fulfilled") {
      alert("Task added!");
      setTaskDetails({
        taskContent: null,
      });
      form.reset();
    } else {
      alert("An error occurred. Please try again.");
    }

    // Reset the form so another task can be added
    e.currentTarget.reset();
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
    <NewTaskView
      handleSubmit={handleSubmit}
      employees={employees}
      handleChange={handleChange}
      errors={errors}
    />
  );
}

export default NewTaskContainer;
