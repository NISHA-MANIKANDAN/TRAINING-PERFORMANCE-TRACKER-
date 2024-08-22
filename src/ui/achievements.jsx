import styled from 'styled-components';

export const AchievementsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`;

export const AchievementCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const AchievementIcon = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
`;

export const AchievementTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const AchievementStatus = styled.div`
  font-size: 14px;
  color: ${({ status }) => (status === 'Complete' ? '#4caf50' : '#6c757d')};
`;
