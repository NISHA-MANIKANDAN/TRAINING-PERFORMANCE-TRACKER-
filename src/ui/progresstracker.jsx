import styled from 'styled-components';

export const ProgressTrackerContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProgressText = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const ProgressLink = styled.a`
  display: block;
  margin-top: 10px;
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ProgressBarWrapper = styled.div`
  width: 70%;
`;

export const ProgressBar = styled.div`
  background-color: #f3f3f3;
  border-radius: 4px;
  height: 8px;
  position: relative;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div`
  background-color: #4caf50;
  height: 100%;
  border-radius: 4px;
`;

export const MilestonesContainer = styled.div`
  margin-top: 20px;
`;

export const Milestone = styled.div`
  margin-bottom: 20px;
`;

export const MilestoneTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;

export const MilestoneDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 10px;
`;

export const Protip = styled.div`
  background-color: #f9f5db;
  padding: 15px;
  border-radius: 4px;
  margin-top: 20px;
  font-size: 14px;
`;
