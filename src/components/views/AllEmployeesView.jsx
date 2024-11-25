import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../store/employeesSlice";
import ContentWrapper from "../wrappers/ContentWrapper";

const AllEmployeesView = ({ employees }) => {
  const dispatch = useDispatch();
  if (employees.length === 0) {
    return (
      <h3 className="error-center">
        There are no employees. Add one to get started.
      </h3>
    );
  }

  return (
    <>
      <h1>All Employees</h1>
      <ContentWrapper>
        <div>
          {employees.map((user) => (
            <div key={user.id} className="card-view">
              <h2>
                {user.firstname} {user.lastname}
              </h2>
              <div>
                <Link to={`/employees/${user.id}`}>
                  <button style={{ marginLeft: "10px" }}>View</button>
                </Link>
                <button
                  onClick={() => {
                    dispatch(deleteEmployee(user.id));
                  }}
                  style={{ marginLeft: "20px" }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </ContentWrapper>
      <div className="footer-nav">
        <Link to={`/employees/new`}>
          <button>Add New Employee</button>
        </Link>
        <Link to={`/`}>
          <button>Back to Home</button>
        </Link>
      </div>
    </>
  );
};

export default AllEmployeesView;
