import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../../store/employeesSlice.js';
import { Link } from 'react-router-dom';

const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

function AllEmployeesView({employees}) {
  if (!employees.length) {
    return (
      <div>There are no employees.</div>
    );
  }
  return (
    <>
      <ul>
        {employees.map((user, idx) => (
          <li key={user.id}>Employee #{idx+1}: {user.firstname}</li>
        ))}
      </ul>
      <Link to={`/`}><button>Back to Home</button></Link>
      <button onClick={() => handleDelete(employee.id)} style={{marginLeft: '10px', color: 'red'}}>X</button>
    </>
  );

}

export default AllEmployeesView;
