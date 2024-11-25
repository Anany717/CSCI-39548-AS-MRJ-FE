import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to={`employees`}>
          <button
            style={{
              backgroundColor: "#242424",
            }}
          >
            All Employees
          </button>
        </Link>
        <Link to={`tasks`}>
          <button
            style={{
              backgroundColor: "#242424",
            }}
          >
            All Tasks
          </button>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
