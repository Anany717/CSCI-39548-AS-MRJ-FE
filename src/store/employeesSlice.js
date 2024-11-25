import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API base path
const PATH = "http://localhost:5001/api";

// Async thunk to fetch employees
export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    console.log("fetchEmployees");
    const response = await axios.get(`${PATH}/employees`);
    return response.data;
  }
);

// Async thunk to add an employee
export const addEmployee = createAsyncThunk(
  "employees/addEmployee",
  async (employee) => {
    const response = await axios.post(`${PATH}/employees`, employee);
    return response.data;
  }
);

// Async thunk to update an employee
export const updateEmployee = createAsyncThunk(
  "employees/updateEmployee",
  async (employee) => {
    const response = await axios.put(
      `${PATH}/employees/${employee.id}`,
      employee
    );
    return response.data;
  }
);

// Async thunk to delete an employee
export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (employeeId) => {
    await axios.delete(`${PATH}/employees/${employeeId}`);
    return employeeId;
  }
);

const employeesSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.findIndex(
          (employee) => employee.id === action.payload.id
        );
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        return state.filter((employee) => employee.id !== action.payload);
      });
  },
});

export default employeesSlice.reducer;
