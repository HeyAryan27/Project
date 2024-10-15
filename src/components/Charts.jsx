import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';


const data = [
  { value: 55, color: '#964B00' }, 
];

const calculateEndAngle = (percentage) => {
  return (percentage / 100) * 180; 
};

export default function PieChartWithPaddingAngle() {
  const percentage = data[0].value; 
  const endAngle = calculateEndAngle(percentage); 
  const remainingPercentage = 100 - percentage; 
  const remainingEndAngle = calculateEndAngle(remainingPercentage); 

  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <PieChart
        series={[
          {
            startAngle: -90, 
            endAngle: -90 + endAngle, 
            paddingAngle: 5, 
            innerRadius: 90, 
            outerRadius: 80,
            data,
            color: '#FF69B4', 
          },
          {
            startAngle: -90 + endAngle, 
            endAngle: 90, 
            paddingAngle: 5, 
            innerRadius: 90, 
            outerRadius: 80, 
            data: [{ value: remainingPercentage, color: 'silver' }], 
          },
        ]}
        margin={{ right: 5 }}
        width={200}
        height={170}
        slotProps={{
          legend: { hidden: true },
        }}
      />
      <div className="absolute inset-0 -mt-10 ml-3 flex items-center text-3xl justify-center font-semibold">
        {percentage}%
      </div>
    </Stack>
  );
}