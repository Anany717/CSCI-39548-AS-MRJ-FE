import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../store/employeesSlice.js';

const NewEmployeeForm = () => {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [department, setDepartment] = useState('');
  const [errors, setErrors] = useState({});

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
      dispatch(addEmployee({ firstname, lastname, department }));
      setFirstname('');
      setLastname('');
      setDepartment('');
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
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default NewEmployeeForm;
