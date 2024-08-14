import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editEmployee } from '../../store/employeesSlice.js';

const EditEmployeeForm = ({ employee }) => {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState(employee.firstname);
  const [lastname, setLastname] = useState(employee.lastname);
  const [department, setDepartment] = useState(employee.department);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFirstname(employee.firstname);
    setLastname(employee.lastname);
    setDepartment(employee.department);
  }, [employee]);

  const validate = () => {
    const errors = {};
    if (!firstname) errors.firstname = "First name is required";
    if (!lastname) errors.lastname = "Last name is required";
    if (!department) errors.department = "Department is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(editEmployee({ id: employee.id, firstname, lastname, department }));
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        {errors.firstname && <p style={{color: 'red'}}>{errors.firstname}</p>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        {errors.lastname && <p style={{color: 'red'}}>{errors.lastname}</p>}
      </div>
      <div>
        <label>Department:</label>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        {errors.department && <p style={{color: 'red'}}>{errors.department}</p>}
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditEmployeeForm;
