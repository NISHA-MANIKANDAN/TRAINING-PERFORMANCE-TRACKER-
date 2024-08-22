// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/features/authentication/authSlice';
import studentRecordsReducer from '.././src/features/dashboard/studentRecordsSlice';
import skillsReducer from '.././src/features/newaddition/skillsSlice';
import progressTrackerReducer from '.././src/features/achievements/progressTrackerSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    studentRecords: studentRecordsReducer,
    skills: skillsReducer,  
    progress: progressTrackerReducer
  },
});
