import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';

const ProjectListWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  width: 900px;
  margin-left:10px;
`;

const ProjectListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ProjectListTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

const SeeAllLink = styled.a`
  font-size: 0.9rem;
  color: #007bff;
  text-decoration: none;
`;

const ProjectList = () => {
  const projects = [
    {
      title: 'Web Development Project',
      description: 'This project involves implementing both frontend and backend functionalities, as well as integrating with third party APIs.',
      location: 'Remote',
      time: 'Part-time',
      rate: '$10/hour',
    },
    {
      title: 'Copyright Project',
      description: 'A project focusing on copyright issues and legal considerations.',
      location: 'Not Paid',
      time: 'Full-time',
      rate: '$8/hour',
    },
    {
      title: 'Web Design Project',
      description: 'This project focuses on designing user interfaces for web applications.',
      location: 'Remote',
      time: 'Part-time',
      rate: '$12/hour',
    },
    {
        title: 'Training Performance Tracker',
        description: 'This project focuses on designing user interfaces for web applications.',
        location: 'Remote',
        time: 'Part-time',
        rate: '$12/hour',
      }
  ];

  return (
    <ProjectListWrapper>
      <ProjectListHeader>
        <ProjectListTitle>Your Recent Projects</ProjectListTitle>
        <SeeAllLink href="#">See all Projects</SeeAllLink>
      </ProjectListHeader>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </ProjectListWrapper>
  );
};

export default ProjectList;
