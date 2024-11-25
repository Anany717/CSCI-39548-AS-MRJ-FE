import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEmployees } from "../../store/employeesSlice";
import SingleEmployeeView from "../views/SingleEmployeeView";

const SingleEmployeeContainer = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  console.log("employees", employees);

  const { employeeId } = useParams();
  console.log("employeeId", employeeId);

  const employee = useSelector((state) =>
    state.employees.find((employee) => employee.id == employeeId)
  );

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (employee) {
      setTasks(employee.tasks || []);
    }
  }, [employeeId, employee]);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (!employee) return <h3 className="error-center">Loading...</h3>;

  return <SingleEmployeeView employee={employee} tasks={tasks} />;
};

export default SingleEmployeeContainer;
