import React from "react";
import { Link } from "react-router-dom";

function NewEmployeeView({ handleChange, handleSubmit, employee, errors }) {
  if (!employee) return <div>Loading...</div>;

  return (
    <>
      <div>
        <h1>Add Employee</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label
              style={{
                fontSize: "1.2em",
                fontWeight: "bold",
                marginRight: "0.7rem",
              }}
            >
              First Name
            </label>
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
            <label
              style={{
                fontSize: "1.2em",
                fontWeight: "bold",
                marginRight: "0.7rem",
              }}
            >
              Last Name
            </label>
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
            <label
              style={{
                fontSize: "1.2em",
                fontWeight: "bold",
                marginRight: "0.7rem",
              }}
            >
              Department
            </label>
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
            <Link to="/employees">
              <button style={{ marginRight: "1em" }}>Cancel</button>
            </Link>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewEmployeeView;
