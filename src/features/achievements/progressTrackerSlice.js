import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  completedReviews: 25, // example value
  milestones: [
    {
      id: 1,
      title: 'Reviews start',
      progress: 100, // percentage
      dueDate: 'Dec 11',
      selfReviews: 50,
      managerReviews: 0,
      shareFinalize: 0,
    },
    {
      id: 2,
      title: 'Select peers',
      progress: 50,
      dueDate: 'Dec 11',
      selfReviews: 0,
      managerReviews: 0,
      shareFinalize: 0,
    },
    {
      id: 3,
      title: 'Approve peers',
      progress: 0,
      dueDate: 'Dec 31',
      selfReviews: 0,
      managerReviews: 0,
      shareFinalize: 0,
    },
  ],
};

const progressTrackerSlice = createSlice({
  name: 'progressTracker',
  initialState,
  reducers: {
    // Example action to update the progress
    updateMilestoneProgress: (state, action) => {
      const { milestoneId, progressType, value } = action.payload;
      const milestone = state.milestones.find(m => m.id === milestoneId);
      if (milestone) {
        milestone[progressType] = value;
      }
    },
  },
});

export const { updateMilestoneProgress } = progressTrackerSlice.actions;
export default progressTrackerSlice.reducer;
