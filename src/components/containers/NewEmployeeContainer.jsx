import React, { useState } from "react";
import { addEmployee } from "../../store/employeesSlice";
import { useDispatch } from "react-redux";
import NewEmployeeView from "../views/NewEmployeeView";

const NewEmployeeContainer = () => {
  const dispatch = useDispatch();
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

  const validate = (name, value) => {
    let error = "";
    if (!value) {
      error = "This field is required";
    } else if (value.length < 2) {
      error = "This field must be at least 2 characters long";
    } else if (value.length > 20) {
      error = "This field must not exceed 20 characters";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
    return error;
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
    console.log("Submitting form", employee);
    e.preventDefault();
    // Perform final validation before submitting
    const newErrors = {};
    Object.keys(employee).forEach((key) => {
      console.log("key", `-${key}-`);
      if (["firstname", "lastname", "department"].includes(key)) {
        // console.log("checking key", key);
        const error = validate(key, employee[key]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });
    if (Object.values(newErrors).some((error) => error)) {
      console.log("Form has errors", newErrors);
      setErrors(newErrors);
      return;
    }
    try {
      const response = await dispatch(addEmployee(employee));
      console.log("response", response);

      if (response.meta.requestStatus === "fulfilled") {
        setEmployee({
          firstname: "",
          lastname: "",
          department: "",
        });
        alert("Employee added successfully");
      } else {
        alert("Failed to add employee");
      }
    } catch (error) {
      console.error("Error adding employee", error);
    }
  };

  return (
    <NewEmployeeView
      employee={employee}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default NewEmployeeContainer;
