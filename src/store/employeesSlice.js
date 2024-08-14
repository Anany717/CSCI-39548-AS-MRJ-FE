//REDUCER
const initialState = [];

export function employeesReducer(state = initialState, action) {
    switch (action.type) {
      case 'employees/employeesLoaded':
        return action.payload;
    case 'employees/employeeDeleted':
      return state.filter(emp => emp.id !== action.payload);
    case 'employees/employeeAdded':
      return [...state, action.payload];
    case 'employees/employeeUpdated':
      return state.map(emp =>
        emp.id === action.payload.id ? action.payload : emp
      );
      default:
        return state;
    }
};

//API calls go here
import axios from "axios";
//PATH (should be where your server is running)
const PATH = "http://localhost:5001/api";

//Thunk 
export const editEmployee = (employee) => async (dispatch) => {
  try {
    const response = await axios.put(`${PATH}/employees/${employee.id}`, employee);
    dispatch({ type: 'employees/employeeUpdated', payload: response.data });
  } catch (err) {
    console.error(err);
  }
};

export const addEmployee = (employee) => async (dispatch) => {
  try {
    const response = await axios.post(`${PATH}/employees`, employee);
    dispatch({ type: 'employees/employeeAdded', payload: response.data });
  } catch (err) {
    console.error(err);
  }
};

export const deleteEmployee = (employeeId) => async (dispatch) => {
  try {
    await axios.delete(`${PATH}/employees/${employeeId}`);
    dispatch({ type: 'employees/employeeDeleted', payload: employeeId });
  } catch (err) {
    console.error(err);
  }
};

export const fetchEmployees = () => async (dispatch) => {
  try {
    let res = await axios.get(`${PATH}/employees`);
    dispatch({type: 'employees/employeesLoaded', payload: res.data});
  } catch(err) {
    console.error(err);
  }
};

export const fetchEmployeeById = (employeeId) => async (dispatch) => {
  try {
    const response = await axios.get(`${PATH}/employees/${employeeId}`);
    dispatch({ type: 'employees/employeeLoaded', payload: response.data });
  } catch (err) {
    console.error(err);
  }
};


