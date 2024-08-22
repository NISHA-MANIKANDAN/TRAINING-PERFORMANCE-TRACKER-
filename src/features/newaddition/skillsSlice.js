import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: [
    // Example data
    { id: 1, name: 'HTML & CSS', type: 'Technical', hours: '150h', level: 'Advanced', status: 'Ongoing', approved: false },
    { id: 2, name: 'JavaScript', type: 'Technical', hours: '120h', level: 'Intermediate', status: 'Ongoing', approved: false },
  ],
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    approveSkill: (state, action) => {
      const skill = state.skills.find((s) => s.id === action.payload);
      if (skill) {
        skill.approved = true;
        skill.status = 'Approved';
      }
    },
  },
});

export const { addSkill, approveSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
