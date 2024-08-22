import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jun',
    Development: 60,
    Design: 30,
    Others: 10,
  },
  {
    name: 'Jul',
    Development: 80,
    Design: 40,
    Others: 20,
  },
  {
    name: 'Aug',
    Development: 70,
    Design: 50,
    Others: 30,
  },
  {
    name: 'Sept',
    Development: 90,
    Design: 60,
    Others: 40,
  },
  {
    name: 'Oct',
    Development: 78,
    Design: 32,
    Others: 18,
  },
  {
    name: 'Nov',
    Development: 110,
    Design: 60,
    Others: 30,
  },
  {
    name: 'Dec',
    Development: 130,
    Design: 70,
    Others: 40,
  },
  {
    name: 'Jan',
    Development: 150,
    Design: 80,
    Others: 50,
  },
  {
    name: 'Feb',
    Development: 200,
    Design: 100,
    Others: 80,
  },
];

const RewardPointsGraph = () => {
  return (
    <ResponsiveContainer width="70%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 20,
          bottom: 5,
          
        }}
        
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Development" stackId="a" fill="#7771e0"  />
        <Bar dataKey="Design" stackId="a" fill="#37036b" />
        <Bar dataKey="Others" stackId="a" fill="#650ed7" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RewardPointsGraph;
