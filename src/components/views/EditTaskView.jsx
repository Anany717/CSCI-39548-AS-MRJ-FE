import { Link } from "react-router-dom";

function EditTaskView({ task, employees, handleSubmit, handleChange, errors }) {
  if (!task) {
    return <h3 className="error-center">Task not found.</h3>;
  }

  return (
    <>
      <div>
        <h1>Edit Task</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-edit-label">Description</label>
            <input
              style={{
                fontSize: "1.1em",
                padding: "0.3em 0.4em",
              }}
              name="taskContent"
              type="text"
              defaultValue={task.content}
              onChange={handleChange}
            />
          </div>
          {errors.taskContent && (
            <div className="error-form">{errors.taskContent}</div>
          )}
          <div className="form-row">
            <label className="form-edit-label">Priority level</label>
            <label>
              <input
                type="radio"
                name="taskPriority"
                value="1"
                defaultChecked={task.priority === 1}
              />{" "}
              Low
            </label>
            <label>
              <input
                type="radio"
                name="taskPriority"
                value="2"
                defaultChecked={task.priority === 2}
              />{" "}
              Medium
            </label>
            <label>
              <input
                type="radio"
                name="taskPriority"
                value="3"
                defaultChecked={task.priority === 3}
              />{" "}
              High
            </label>
            {/* <label>
              <input type="radio" name="taskPriority" value="1" /> Low
            </label>
            <label>
              <input type="radio" name="taskPriority" value="2" /> Medium
            </label>
            <label>
              <input type="radio" name="taskPriority" value="3" /> High
            </label> */}
          </div>
          {/* {errors.lastname && (
            <div style={{ color: "red" }}>{errors.lastname}</div>
          )} */}
          <div className="form-row">
            <label className="form-edit-label">Completion status</label>
            <select name="completed" defaultValue={task.completed} required>
              <option value="false">In Progress</option>
              <option value="true">Completed</option>
            </select>
          </div>
          <div className="form-row">
            <label className="form-edit-label">Assign employee</label>
            <select
              name="employeeId"
              defaultValue={task.employeeId || "null"}
              required
            >
              <option value="null">None</option>
              {employees.map((emp) => {
                let name = emp.firstname + " " + emp.lastname;
                return (
                  <option key={emp.id} value={emp.id}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          {/* {errors.department && (
            <div style={{ color: "red" }}>{errors.department}</div>
          )} */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "1em",
            }}
          >
            <Link to={`/tasks/${task.id}`}>
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

  return (
    <div>
      <h3 style={{ textDecoration: "underline" }}>Edit task information: </h3>
      <form onSubmit={handleSubmit} id="edittaskform">
        <label>
          {" "}
          Description:
          <input name="taskContent" defaultValue={task.content} required />
        </label>
        <p>
          {" "}
          Priority level:
          <label>
            <input type="radio" name="taskPriority" value="1" required /> Low
          </label>
          <label>
            <input type="radio" name="taskPriority" value="2" /> Medium
          </label>
          <label>
            <input type="radio" name="taskPriority" value="3" /> High
          </label>
        </p>
        <label>
          {" "}
          Completion status:
          <select name="completed" defaultValue={task.completed} required>
            <option value="false">In Progress</option>
            <option value="true">Completed</option>
          </select>
        </label>
        <br />
        <label>
          {" "}
          Assign employee:
          <select name="employeeId" defaultValue="null" required>
            <option value="null">None</option>
            {employees.map((emp) => {
              let name = emp.firstname + " " + emp.lastname;
              return (
                <option key={emp.id} value={emp.id}>
                  {name}
                </option>
              );
            })}
          </select>
        </label>
        <button>Save Task</button>
      </form>
      <Link to={`../tasks`}>Back to all tasks</Link>
    </div>
  );
}

export default EditTaskView;
