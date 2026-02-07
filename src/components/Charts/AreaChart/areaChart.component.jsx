import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function AreaChartt({ type, stroke, fill , onReload , onReset ,  onReloadDashboard_ , onResetDashboard_ }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {

    if (onReload) {
      handleReload();
      onReset(false);
    }

  }, [onReload])

    useEffect(() => {
      if(onReloadDashboard_) {
        handleReload();
        onResetDashboard_(false);
      }
    } , [onReloadDashboard_]);
  

  const handleFetchData = () => {
     fetch("https://dummyjson.com/comments")
      .then(res => res.json())
      .then(res => {
        // res.comments = array of comments
        const chartData = res.comments.map((item, index) => ({
          // x-axis: fake date spaced by index
          time: new Date(2024, 0, 1 + index).getTime(),
          // y-axis: number to plot (e.g., body length)
          sales: item.body.length,
        }));
        setData(chartData);
      })
      .catch(err => console.log(err));
  }

  const handleReload = () => {
      fetch("https://dummyjson.com/comments")
    .then(res => res.json())
    .then(res => {
      const chartData = res.comments.map((item, index) => ({
        // x-axis: fake date spaced by index
        time: new Date(2024, 0, 1 + index).getTime(),
        // y-axis: random number between 100 and 500
        sales: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      }));
      setData(chartData);
    })
    .catch(err => console.log(err));
  }
  // Optional: xTicks every 5th item
  const xTicks = data.filter((_, idx) => idx % 5 === 0).map(d => d.time);

  return (
    <div>
      <ResponsiveContainer width="100%" height={215}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid horizontal vertical={false} strokeDasharray="0" stroke="#E5E7EB" />
          <XAxis
            dataKey="time"
            type="number"
            scale="time"
            domain={["dataMin", "dataMax"]}
            ticks={xTicks}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fontWeight: 500 }}
            tickFormatter={(time) =>
              new Date(time).toLocaleDateString("en-US", { month: "short", day: "numeric" })
            }
          />
          <YAxis
            width={27}
            axisLine={false}
            tickLine={false}
            tickCount={5}
            tick={{ fontSize: 12, fontWeight: 500 }}
          />
          <Tooltip
            labelFormatter={(time) =>
              new Date(time).toLocaleDateString("en-US", { month: "short", day: "numeric" })
            }
          />
          <Area type={type} dataKey="sales" stroke={stroke} fill={fill} fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
