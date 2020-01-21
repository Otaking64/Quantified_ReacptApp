import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { AreaChart, Area, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../components/Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('01 jan', 28),
  createData('02 jan', 28.5),
  createData('03 jan', 28.3),
  createData('04 jan', 29),
  createData('05 jan', 27.5),
  createData('06 jan', 29.5),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Temperature (last week)</Title>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 16,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary} domain={[25, 31]}>
          </YAxis>
          <Area type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
