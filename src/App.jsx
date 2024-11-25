import "./App.css";
import "./components/wrappers/wrappers.css";
import "react-web-vector-icons/fonts";
import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import { fetchEmployees } from "./store/employeesSlice";
import { fetchTasks } from "./store/tasksSlice";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();

  const fetchAllData = async () => {
    await dispatch(fetchEmployees());
    await dispatch(fetchTasks());
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="app">
        <Outlet />
      </div>
    </>
  );
}

export default App;
