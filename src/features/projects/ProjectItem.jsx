import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp, FaCheckCircle } from 'react-icons/fa';

// Styled Components
const ProjectItemWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  cursor: pointer;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
`;

const ProjectDetails = styled.div`
  margin-top: 15px;
  color: #666;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MarkCompleteButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const CompletedIcon = styled(FaCheckCircle)`
  color: #28a745;
  font-size: 1.2rem;
`;

const ProjectItem = ({ project }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [completed, setCompleted] = useState(false);

  return (
    <ProjectItemWrapper>
      <ProjectHeader onClick={() => setDetailsVisible(!detailsVisible)}>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ButtonWrapper>
          {completed ? (
            <CompletedIcon />
          ) : (
            <MarkCompleteButton onClick={(e) => {
              e.stopPropagation();
              setCompleted(true);
            }}>
              Mark as Complete
            </MarkCompleteButton>
          )}
          {detailsVisible ? <FaChevronUp /> : <FaChevronDown />}
        </ButtonWrapper>
      </ProjectHeader>
      <ProjectDetails visible={detailsVisible}>
        <p>{project.description}</p>
        <p>Location: {project.location}</p>
        <p>Time: {project.time}</p>
        <p>Rate: {project.rate}</p>
      </ProjectDetails>
    </ProjectItemWrapper>
  );
};

export default ProjectItem;
