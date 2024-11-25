import React from "react";
import { Link } from "react-router-dom";

function EditEmployeeView({ handleChange, handleSubmit, employee, errors }) {
  if (!employee) {
    return <h3 className="error-center">Employee not found.</h3>;
  }
  return (
    <>
      <div>
        <h1>Edit Employee</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-edit-label">First Name</label>
            <input
              style={{
                fontSize: "1.1em",
                padding: "0.3em 0.4em",
              }}
              type="text"
              name="firstname"
              value={employee.firstname}
              onChange={handleChange}
            />
          </div>
          {errors.firstname && (
            <div className="error-form">{errors.firstname}</div>
          )}
          <div className="form-row">
            <label className="form-edit-label">Last Name</label>
            <input
              style={{
                fontSize: "1.1em",
                padding: "0.3em 0.4em",
              }}
              type="text"
              name="lastname"
              value={employee.lastname}
              onChange={handleChange}
            />
          </div>
          {errors.lastname && (
            <div className="error-form">{errors.lastname}</div>
          )}
          <div className="form-row">
            <label className="form-edit-label">Department</label>
            <input
              style={{
                fontSize: "1.1em",
                padding: "0.3em 0.4em",
              }}
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
            />
          </div>
          {errors.department && (
            <div className="error-form">{errors.department}</div>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "1em",
            }}
          >
            <Link to={`/employees/${employee.id}`}>
              <button
                style={{
                  marginRight: "1rem",
                }}
              >
                Back
              </button>
            </Link>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditEmployeeView;
