import AllEmployeesView from "../views/AllEmployeesView";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../store/employeesSlice";
import NewEmployeeForm from './NewEmployeeForm';

function AllEmployeesContainer() {
    const employees = useSelector((state) => state.employees);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployees());
      }, [dispatch]);
    
    return (
       <AllEmployeesView employees={employees} />
    );

}

export default AllEmployeesContainer;
