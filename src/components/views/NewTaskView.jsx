import { Link } from "react-router-dom";

function NewTaskView({ handleSubmit, employees, handleChange, errors }) {
  return (
    <>
      <div>
        <h1>New Task</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label
              style={{
                fontSize: "1.2em",
                fontWeight: "bold",
                marginRight: "0.7rem",
              }}
            >
              Description
            </label>
            <input
              style={{
                fontSize: "1.1em",
                padding: "0.3em 0.4em",
              }}
              name="taskContent"
              type="text"
              onChange={handleChange}
            />
          </div>
          {errors.taskContent && (
            <div className="error-form">{errors.taskContent}</div>
          )}
          <div className="form-row">
            <label
              style={{
                fontSize: "1.2em",
                fontWeight: "bold",
                marginRight: "0.7rem",
              }}
            >
              Priority level
            </label>
            <label>
              <input
                type="radio"
                name="taskPriority"
                value="1"
                defaultChecked
              />{" "}
              Low
            </label>
            <label>
              <input type="radio" name="taskPriority" value="2" /> Medium
            </label>
            <label>
              <input type="radio" name="taskPriority" value="3" /> High
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
            <label
              style={{
                fontSize: "1.2em",
                fontWeight: "bold",
                marginRight: "0.7rem",
              }}
            >
              Completion status
            </label>
            <select name="completed" required>
              <option value="false">In Progress</option>
              <option value="true">Completed</option>
            </select>
          </div>
          <div className="form-row">
            <label
              style={{
                fontSize: "1.2em",
                fontWeight: "bold",
                marginRight: "0.7rem",
              }}
            >
              Assign employee
            </label>
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
            <Link to="/tasks">
              <button style={{ marginRight: "1em" }}>Cancel</button>
            </Link>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewTaskView;
