import styled from 'styled-components';

export const RankBox = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
  color: #000000;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

export const RankPercentage = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const RankLabel = styled.div`
  font-size: 1rem;
  color: #000000;
  margin-bottom: 20px;
`;

export const RankGraph = styled.div`
  width: 100%;
  height: 60px;
  background: linear-gradient(90deg, #6c5ce7 0%,#4b3db3 100%);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

export const GraphLine = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const GraphDot = styled.div`
  width: 10px;
  height: 10px;
  background: #322784;
  border-radius: 50%;
  position: absolute;
  bottom: 10px;
  right: 29px;
  box-shadow: 0 0 10px #6c5ce7;
`;
