import React from "react";
import styled from "styled-components";

const CalendarContainer = styled.div`
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: #f5f5f5;
`;

const TimeSlot = styled.div`
  display: flex;
  padding: 8px;
  border-bottom: 1px solid #f0f0f0;
`;

const Time = styled.div`
  width: 50px;
  color: #000000;
`;

const Task = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  padding: 8px;
  border-radius: 4px;
  margin-left: 10px;
`;

const TaskButton = styled.button`
  background-color: #00aaff;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
`;

const Calendar = () => {
  return (
    <CalendarContainer>
      <Header>
        <div>Jul 16, Sun</div>
        <div>Today</div>
      </Header>
      <TimeSlot>
        <Time>3pm</Time>
      </TimeSlot>
      <TimeSlot>
        <Time>4pm</Time>
        <Task>Create a template for design requests</Task>
      </TimeSlot>
      <TimeSlot>
        <Time>5pm</Time>
      </TimeSlot>
      <TimeSlot>
        <Time>6pm</Time>
      </TimeSlot>
      <TimeSlot>
        <Time>7pm</Time>
      </TimeSlot>
      <TimeSlot>
        <Time>8pm</Time>
      </TimeSlot>
      
    </CalendarContainer>
  );
};

export default Calendar;
