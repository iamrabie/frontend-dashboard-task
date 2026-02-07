import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
/* ---------------- BAR CHART DATA ---------------- */ const barData = [
  { name: "Jan", sales: 4000, revenue: 2400 },
  { name: "Feb", sales: 3000, revenue: 1398 },
  { name: "Mar", sales: 2000, revenue: 9800 },
  { name: "Apr", sales: 2780, revenue: 3908 },
  { name: "May", sales: 1890, revenue: 4800 },
  { name: "Jun", sales: 2390, revenue: 3800 },
];
/* ---------------- AREA CHART DATA (TIME SERIES) ---------------- */ const rawAreaData =
  [
    { date: "2024-01-14", sales: 4000 },
    { date: "2024-01-20", sales: 4200 },
    { date: "2024-02-01", sales: 3800 },
    { date: "2024-02-05", sales: 3000 },
    { date: "2024-02-10", sales: 3400 },
    { date: "2024-02-26", sales: 2000 },
    { date: "2024-03-05", sales: 2600 },
    { date: "2024-03-19", sales: 2780 },
    { date: "2024-04-01", sales: 3100 },
    { date: "2024-04-10", sales: 3500 },
  ];
const areaData = rawAreaData.map((d) => ({
  ...d,
  time: new Date(d.date).getTime(),
}));
const xTicks = [
  new Date("2024-01-14").getTime(),
  new Date("2024-02-05").getTime(),
  new Date("2024-02-26").getTime(),
  new Date("2024-03-19").getTime(),
  new Date("2024-04-10").getTime(),
];
/* ---------------- COMPONENT ---------------- */ 
export default function AreaChartt({type , stroke , fill}) {
  return (
      <div>
        <ResponsiveContainer width="100%" height={215}>
          {" "}
          <AreaChart
            data={areaData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            {" "}
            <CartesianGrid horizontal={true} vertical={false} strokeDasharray="0" stroke="#E5E7EB" />
            <XAxis
              dataKey="time"
              type="number"
              scale="time"
              domain={["dataMin", "dataMax"]}
              ticks={xTicks}
              tickLine={false}
              axisLine={false}
              tick={{fontSize:12 , fontWeight:500}}
            //   padding={{ left: 0, right: 0 }}
              tickFormatter={(time) =>
                new Date(time).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />{" "}
            <YAxis  width={34} axisLine={false} tickLine={false} tickCount={5} tick={{fontSize:12 , fontWeight:500}} />{" "}
            <Tooltip
              labelFormatter={(time) =>
                new Date(time).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />{" "}
            <Area
              type={type}
              dataKey="sales"
              stroke={stroke}
              fill={fill}
              fillOpacity={0.3}
            />{" "}
          </AreaChart>{" "}
        </ResponsiveContainer>{" "}
    </div>
  );
}
