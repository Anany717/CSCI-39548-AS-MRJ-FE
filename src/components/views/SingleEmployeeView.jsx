import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesome } from "react-web-vector-icons";
function SingleEmployeeView({ employee, tasks }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginRight: "20px" }}>Employee Details</h1>
        {/* <FontAwesome name="share" color="white" size={30} /> */}
        <Link to="/employees">
          <button style={{ marginRight: "1em" }}>Back</button>
        </Link>
        <Link to={"edit/"}>
          <button>Edit</button>
        </Link>
      </div>
      <div className="form-details-container">
        <strong className="form-details-label">First Name:</strong>
        {employee.firstname}
      </div>
      <div className="form-details-container">
        <strong className="form-details-label">Last Name:</strong>
        {employee.lastname}
      </div>
      <div className="form-details-container">
        <strong className="form-details-label">Department:</strong>
        {employee.department}
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>Tasks</h1>
      </div>
      <div>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <li
                key={task.id}
                style={{
                  fontSize: "1.5rem",
                }}
              >
                <a
                  style={{
                    color: "white",
                    fontWeight: "normal",
                  }}
                  href={`/tasks/${task.id}`}
                >
                  {task.content}
                  <span
                    style={{
                      marginLeft: "0.5rem",
                    }}
                  >
                    ↗️
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              color: "red",
            }}
          >
            No tasks assigned to this employee.
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleEmployeeView;
