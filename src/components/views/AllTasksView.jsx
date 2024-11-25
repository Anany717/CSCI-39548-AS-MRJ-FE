import ContentWrapper from "../wrappers/ContentWrapper";
import "./styles/all-tasks.css";

import { Link } from "react-router-dom";

function AllTasksView({ tasks, deleteTask }) {
  let priorities = ["Low", "Medium", "High"];

  if (tasks.length === 0) {
    return (
      <h3 className="error-center">
        There is no task. Add one to get started.
      </h3>
    );
  }

  return (
    <>
      <h1>All Tasks</h1>

      <ContentWrapper>
        <div>
          {tasks.map((task, index) => (
            <div key={task.id} className="card-view">
              <div>
                <div
                  style={{
                    fontSize: "1.3em",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Task #{index + 1}:
                  </span>{" "}
                  {task.content}
                </div>
                <div
                  style={{
                    fontSize: "1.3em",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Assigned To:
                  </span>{" "}
                  {task?.employee?.firstname + " " + task?.employee?.lastname}
                </div>

                <div
                  style={{
                    fontSize: "1.3em",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Priority:
                  </span>{" "}
                  {priorities[task.priority - 1]}
                </div>

                <div
                  style={{
                    fontSize: "1.3em",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Status:
                  </span>{" "}
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

              <div>
                <Link to={`/tasks/${task.id}`}>
                  <button style={{ marginLeft: "10px" }}>View</button>
                </Link>
                <button
                  onClick={() => {
                    deleteTask(task.id);
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
        <Link to={`/tasks/new`}>
          <button>Add New Task</button>
        </Link>
        <Link to={`/`}>
          <button>Back to Home</button>
        </Link>
      </div>
    </>
  );
}

export default AllTasksView;
