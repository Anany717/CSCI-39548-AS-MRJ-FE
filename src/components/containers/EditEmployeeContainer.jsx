import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "../../store/employeesSlice";
import EditEmployeeView from "../views/EditEmployeeView";

const EditEmployeeContainer = () => {
  const dispatch = useDispatch();
  const { employeeId } = useParams();
  const fetchedEmployee = useSelector((state) =>
    state.employees.find((employee) => employee.id == employeeId)
  );

  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    department: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    department: "",
  });

  useEffect(() => {
    if (fetchedEmployee) {
      console.log("fetchedEmployee", fetchedEmployee);

      setEmployee(fetchedEmployee);
    }
  }, [employeeId]);

  const validate = (name, value) => {
    console.log("name", name);
    console.log("value", value);

    let error = "";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
    validate(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform final validation before submitting

    Object.keys(employee).forEach((key) => {
      console.log("key", `-${key}-`);

      if (["firstname", "lastname", "department"].includes(key)) {
        // console.log("checking key", key);
        validate(key, employee[key]);
      }
    });
    if (Object.values(errors).some((error) => error)) {
      console.log("Form has errors", errors);
      return;
    }
    try {
      const reqEmployee = {
        id: employee.id,
        firstname: employee.firstname,
        lastname: employee.lastname,
        department: employee.department,
      };

      console.log("request employee", reqEmployee);

      const response = await dispatch(updateEmployee(reqEmployee));
      if (response.meta.requestStatus === "fulfilled") {
        alert("Employee updated successfully");
      } else {
        alert("Failed to update employee");
      }
      console.log("response", response);
    } catch (error) {
      console.error("Error adding employee", error);
    }
  };

  return (
    <EditEmployeeView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      employee={employee}
      errors={errors}
    />
  );
};

export default EditEmployeeContainer;
