import React from 'react';
import styled from 'styled-components';

// Styled Components
const ProposalProgressWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  height: 150px;
  margin-top: 20px;
  margin-left: 28px;
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ProgressTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
`;

const ProgressDate = styled.span`
  font-size: 0.9rem;
  color: #999;
`;

const ProgressBars = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressItem = styled.div`
  text-align: center;
`;

const ProgressCount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProgressLabel = styled.div`
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 10px;
`;

const ProgressBarContainer = styled.div`
  width: 60px;
  height: 5px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: ${props => props.color || '#007bff'};
  width: ${props => props.percentage || 0}%;
  transition: width 0.3s ease;
`;

const ProposalProgress = () => {
  const progressData = [
    { label: 'Projects completed', count: 2, percentage: 100, color: '#007bff' },
    { label: 'Ongoing', count: 1, percentage: 30, color: '#ff8800' },
    { label: 'To Kickstart', count: 2, percentage: 20, color: '#28a745' },
  ];

  return (
    <ProposalProgressWrapper>
      <ProgressHeader>
        <ProgressTitle>Proposal Progress</ProgressTitle>
        <ProgressDate>April 11, 2024</ProgressDate>
      </ProgressHeader>
      <ProgressBars>
        {progressData.map((item, index) => (
          <ProgressItem key={index}>
            <ProgressCount>{item.count}</ProgressCount>
            <ProgressLabel>{item.label}</ProgressLabel>
            <ProgressBarContainer>
              <ProgressBar color={item.color} percentage={item.percentage} />
            </ProgressBarContainer>
          </ProgressItem>
        ))}
      </ProgressBars>
    </ProposalProgressWrapper>
  );
};

export default ProposalProgress;
