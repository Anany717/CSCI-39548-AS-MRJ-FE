//REDUCER
const initialState = [];

export function employeesReducer(state = initialState, action) {
    switch (action.type) {
      case 'employees/employeesLoaded':
        return action.payload;
      default:
        return state;
    }
};

export function employeesReducer(state = initialState, action) {
  switch (action.type) {
    // Existing cases...
    case 'employees/employeeLoaded':
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


