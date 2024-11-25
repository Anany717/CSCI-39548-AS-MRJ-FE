import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API base path
const PATH = "http://localhost:5001/api/tasks";

// Async thunk to fetch tasks
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(PATH);
  return response.data;
});

// Async thunk to add a task
export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
  const response = await axios.post(PATH, task);
  return response.data;
});

// Async thunk to update a task
export const editTask = createAsyncThunk("tasks/editTask", async (task) => {
  const response = await axios.put(`${PATH}/${task.id}`, task);
  return response.data;
});

// Async thunk to delete a task
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId) => {
    await axios.delete(`${PATH}/${taskId}`);
    return taskId;
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        return state.filter((task) => task.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;
