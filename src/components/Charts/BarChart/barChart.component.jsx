  import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
 
/* ---------------- GENERATE DAILY DATA ---------------- */
 
const generateDailyData = (startDate, endDate, minValue, maxValue) => {
  const data = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
 
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    data.push({
      time: new Date(d).getTime(),
      value: Math.floor(Math.random() * (maxValue - minValue)) + minValue,
    });
  }
  return data;
};
 
/* ---------------- DATA ---------------- */
 
const uniqueLoginsData = generateDailyData('2024-01-14', '2024-04-10', 250, 600);
const queriesData = generateDailyData('2024-01-14', '2024-04-10', 100, 500);
const avgResponseWorkflowData = generateDailyData('2024-01-14', '2024-04-10', 5, 20);
const firewallData = generateDailyData('2024-01-14', '2024-04-10', 100, 300);
const avgResponseFirewallData = generateDailyData('2024-01-14', '2024-04-11', 1, 4);
 
const xTicks = [
  new Date('2024-01-14').getTime(),
  new Date('2024-02-05').getTime(),
  new Date('2024-02-26').getTime(),
  new Date('2024-03-19').getTime(),
  new Date('2024-04-10').getTime(),
];
 
const xTicksFirewall = [
  new Date('2024-01-14').getTime(),
  new Date('2024-02-05').getTime(),
  new Date('2024-02-26').getTime(),
  new Date('2024-03-19').getTime(),
  new Date('2024-04-11').getTime(),
];
 
 
export default function BarChartExample({color , ticks}) {
  return (
    <div style={{backgroundColor: 'white'}}>
        <style>
            {`svg:focus {
            outline:none !important;
            user-select:none
            }`}
        </style>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={queriesData}>
              <CartesianGrid horizontal={true} vertical={false} strokeDasharray="0" stroke="#E5E7EB" />{" "}  
              <XAxis
                dataKey="time"
                type="number"
                scale="time"
                domain={['dataMin', 'dataMax']}
                ticks={xTicks}
                tickFormatter={(time) =>
                  new Date(time).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })
                }
                axisLine={false}
                tickLine={false}
                style={{ fontSize: '12px' , fontWeight:500 }}
              />
              <YAxis axisLine={false} tickLine={false} width={23} tickCount={3} tick={{fontSize:12 , fontWeight:500}} />
              <Tooltip
                labelFormatter={(time) =>
                  new Date(time).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })
                }
                contentStyle={{ fontSize: '12px' }}
              />
              <Bar dataKey="value" fill={color} barSize={2.5} />
            </BarChart>
          </ResponsiveContainer>
    </div>
  );
}