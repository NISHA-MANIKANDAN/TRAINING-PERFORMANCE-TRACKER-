import React from 'react';
import Heading from "../../ui/Heading";
import Table from '../../ui/Table';

import { FaBook, FaCode, FaPython } from 'react-icons/fa';

const TechnicalSkills = () => {
  const {
    SkillsBox,
    SkillsHeader,
    
    Progress,
    SkillsList,
    SkillsItem,
    SkillIcon,
    SkillName,
    SkillStatus,
    Status,
    Hours,
  } = Table(); // Ensure this is destructured properly

  const skills = [
    { icon: <FaBook />, name: 'HTML & CSS', status: 'Advanced', hours: '150h' },
    { icon: <FaCode />, name: 'JavaScript', status: 'Intermediate', hours: '120h' },
    { icon: <FaPython />, name: 'Python', status: 'Beginner', hours: '80h' },
    { icon: <FaBook />, name: 'HTML & CSS', status: 'Advanced', hours: '150h' },
    { icon: <FaCode />, name: 'JavaScript', status: 'Intermediate', hours: '120h' },
    { icon: <FaPython />, name: 'Python', status: 'Beginner', hours: '80h' }
  ];

  return (
    <SkillsBox>
      <SkillsHeader>
      <Heading as="h2" style={{marginLeft:"10px"}}>TECHNICAL SKILLS</Heading>
        <Progress>Done 70%</Progress>
      </SkillsHeader>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillsItem key={index}>
            <SkillIcon>
            {skill.icon}
            </SkillIcon>
            <SkillName>{skill.name}</SkillName>
            <SkillStatus>
              <Status>{skill.status}</Status>
              <Hours>{skill.hours}</Hours>
            </SkillStatus>
          </SkillsItem>
        ))}
      </SkillsList>
    </SkillsBox>
  );
};

export default TechnicalSkills;
