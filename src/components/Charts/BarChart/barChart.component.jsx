import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CommentsChart({
  color,
  onReload,
  onReset,
  onReloadDashboard_,
  onResetDashboard_,
}) {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    if (onReload) {
      handleReload();
      onReset(false);
    }
  }, [onReload]);

  useEffect(() => {
    if (onReloadDashboard_) {
      handleReload();
      onResetDashboard_(false);
    }
  }, [onReloadDashboard_]);

  const handleFetchData = () => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((res) => {
        // Map API response to chart data
        const chartData = res.comments.map((comment) => ({
          id: comment.id,
          postId: comment.postId,
          likes: comment.likes,
        }));
        setData(chartData);
      })
      .catch((err) => console.log(err));
  };

  const handleReload = () => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((res) => {
        // Add random numbers to likes for visual change
        const randomizedData = res.comments.map((c) => ({
          ...c,
          likes: c.likes + Math.floor(Math.random() * 5), // 0–4 extra likes
        }));
        setData(randomizedData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <CartesianGrid
            horizontal={true}
            vertical={false}
            strokeDasharray="0"
            stroke="#E5E7EB"
          />

          <XAxis
            dataKey="postId"
            axisLine={false}
            tickLine={false}
            style={{ fontSize: "12px", fontWeight: 500 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            width={14}
            tick={{ fontSize: 12, fontWeight: 500 }}
          />

          <Tooltip
            contentStyle={{ fontSize: "12px" }}
            formatter={(value) => `${value} likes`}
            labelFormatter={(label) => `Post ID: ${label}`}
          />

          <Bar dataKey="likes" fill={color} barSize={4} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
