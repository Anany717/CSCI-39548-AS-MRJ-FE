import { Link } from "react-router-dom";

function SingleTaskView({ task, employees, handleSubmit }) {
  let priorities = ["Low", "Medium", "High"];

  let employeeAssigned = task.employee ? (
    // <Link to={`../employees/${task.employee.id}`}>
    //   {task.employee.firstname + " " + task.employee.lastname}
    // </Link>
    <span>{task.employee.firstname + " " + task.employee.lastname}</span>
  ) : (
    "None"
  );

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ marginRight: "20px" }}>Task Details</h1>
          <Link to="/tasks">
            <button style={{ marginRight: "1em" }}>Back</button>
          </Link>
          <Link to={"edit/"}>
            <button>Edit</button>
          </Link>
        </div>
        <div className="form-details-container">
          <strong className="form-details-label">Title:</strong>
          {task.content}
        </div>
        <div className="form-details-container">
          <strong className="form-details-label">Priority:</strong>
          {priorities[task.priority - 1]}
        </div>
        <div className="form-details-container">
          <strong className="form-details-label">Assigned To:</strong>
          {employeeAssigned}
        </div>
        <div className="form-details-container">
          <strong className="form-details-label">Status:</strong>
          {task.completed ? (
            <span
              style={{
                color: "green",
              }}
            >
              COMPLETED
            </span>
          ) : (
            <span
              style={{
                color: "red",
              }}
            >
              IN PROGRESS
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default SingleTaskView;
