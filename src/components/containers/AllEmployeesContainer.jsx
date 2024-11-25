import { useEffect } from "react";
import AllEmployeesView from "../views/AllEmployeesView";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchEmployees } from "../../store/employeesSlice";

function AllEmployeesContainer() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <>
      <AllEmployeesView employees={employees} />
    </>
  );
}

export default AllEmployeesContainer;
