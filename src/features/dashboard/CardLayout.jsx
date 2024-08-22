import React from 'react';
import Card from '../../ui/card';
import { FaBook } from 'react-icons/fa';

const CardLayout = ({ record }) => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Card
title="CGPA"
value={record.cgpa} 
icon={<FaBook />}
unit="CGPA"
/>
<Card
title="CGPA"
value={record.cgpa} // Assuming backend provides the current CGPA
// Assuming backend provides last year's CGPA
icon={<FaBook />}
unit="CGPA"
/>
    </div>
  );
};

export default CardLayout;

{/* <Card
title="CGPA"
value={record.cgpa} // Assuming backend provides the current CGPA
// Assuming backend provides last year's CGPA
icon={<FaBook />}
unit="CGPA"
/>

    <h2>{record.name}</h2>
    <p>CGPA: {record.cgpa}</p>
    <p>Attendance: {record.attendancePercentage}%</p>
    <p>FA Percentage: {record.faPercentage}%</p>
    <p>Reward Points: {record.rewardPoints}</p>
    <p>Year: {record.year}</p>
    <p>Semester: {record.semester}</p>
    <p>Rank: {record.rank}</p>
  </div> */}