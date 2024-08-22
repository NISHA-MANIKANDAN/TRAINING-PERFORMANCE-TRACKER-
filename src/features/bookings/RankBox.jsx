import React from 'react';
import { RankBox, RankPercentage, RankLabel, RankGraph, GraphLine, GraphDot } from '../../ui/Rank'; // Adjust path as needed

const RankDisplay = ({ percentage, label }) => {
  return (
    <RankBox>
      <RankPercentage>{percentage}</RankPercentage>
      <RankLabel>{label}</RankLabel>
      <RankGraph>
        <GraphLine />
        <GraphDot />
      </RankGraph>
    </RankBox>
  );
};

export default RankDisplay;
