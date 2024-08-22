import React from 'react';
import styled from 'styled-components';

const Card = ({ title, value, lastYearValue, icon, unit }) => {
  return (
    <CardWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Value>{value}</Value>
      <Subtitle>
        {title} last year was {lastYearValue} {unit}
      </Subtitle>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 10px;
`;

const IconWrapper = styled.div`
  font-size: 24px;
  color: #fff;
  background-color: #6c5ce7;
  padding: 15px 20px;
  border-radius: 50%;
  display: inline-block;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const Value = styled.h2`
  font-size: 1.8rem;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: #999;
`;

export default Card;
