import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Table from '../../ui/Table';
import { addSkill } from './skillsSlice'; // Assume you have a Redux slice for skills

const PlusButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 15px;

  &:hover {
    background-color: #45a049;
  }
`;

const FormModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const SkillsTable = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newSkill, setNewSkill] = useState({
    name: '',
    type: '',
    hours: '',
    level: '',
    status: 'Ongoing',
  });

  const dispatch = useDispatch();
  
  const skills = useSelector((state) => state.skills?.skills || []); // Guard against undefined

  if (!skills) {
    return <div>Loading...</div>; // or handle error state appropriately
  }

  const {
    SkillsBox,
    SkillsHeader,
    Title,
    Progress,
    SkillsList,
    SkillsItem,
    SkillIcon,
    SkillName,
    SkillStatus,
    Status,
    Hours,
  } = Table();

  const handleInputChange = (e) => {
    setNewSkill({
      ...newSkill,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addSkill(newSkill));
    setIsFormOpen(false); // Close the form after submission
  };

  return (
    <>
      {isFormOpen && (
        <>
          <Overlay onClick={() => setIsFormOpen(false)} />
          <FormModal>
            <h2>Add New Skill</h2>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label>Skill Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newSkill.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Type:</label>
                <input
                  type="text"
                  name="type"
                  value={newSkill.type}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Hours:</label>
                <input
                  type="number"
                  name="hours"
                  value={newSkill.hours}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Level:</label>
                <input
                  type="text"
                  name="level"
                  value={newSkill.level}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit">Add Skill</button>
            </form>
          </FormModal>
        </>
      )}

      <SkillsBox>
        <SkillsHeader>
          <Title>Skills</Title>
          <Progress>
            Progress: {skills.filter(skill => skill.status === 'Approved').length} / {skills.length} Approved
          </Progress>
          <PlusButton onClick={() => setIsFormOpen(true)}>+ Add Skill</PlusButton>
        </SkillsHeader>
        <SkillsList>
          {skills.map(skill => (
            <SkillsItem key={skill.id}>
              <SkillIcon>{/* Add an icon or image here */}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
              <SkillStatus>
                <Status>{skill.status}</Status>
                <Hours>{skill.hours}</Hours>
              </SkillStatus>
            </SkillsItem>
          ))}
        </SkillsList>
      </SkillsBox>
    </>
  );
};

export default SkillsTable;
