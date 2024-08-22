// features/studentRecords/studentRecordsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch student records based on the time period
export const fetchStudentRecords = createAsyncThunk(
  'studentRecords/fetchStudentRecords',
  async (days) => {
    const response = await axios.get(`http://localhost:3000/api/dashboard/${days}`);

    return response.data;
  }
);

const studentRecordsSlice = createSlice({
  name: 'studentRecords',
  initialState: {
    records: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    days: 7, // Default to last 7 days
  },
  reducers: {
    setDays: (state, action) => {
      state.days = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentRecords.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStudentRecords.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.records = action.payload;
      })
      .addCase(fetchStudentRecords.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setDays } = studentRecordsSlice.actions;

export default studentRecordsSlice.reducer;
