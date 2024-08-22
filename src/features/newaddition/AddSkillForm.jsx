import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSkill } from './skillsSlice';

const AddSkillForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('Technical');
  const [hours, setHours] = useState('');
  const [level, setLevel] = useState('Beginner');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSkill = {
      id: Date.now(),
      name,
      type,
      hours,
      level,
      status: 'Ongoing',
      approved: false,
    };
    dispatch(addSkill(newSkill));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Skill Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Technical">Technical</option>
          <option value="Achievement">Achievement</option>
          <option value="Project">Project</option>
        </select>
      </label>
      <label>
        Hours:
        <input type="text" value={hours} onChange={(e) => setHours(e.target.value)} required />
      </label>
      <label>
        Level:
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </label>
      <button type="submit">Add Skill</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default AddSkillForm;
