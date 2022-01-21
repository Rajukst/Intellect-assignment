import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";
const ExpressCollection = () => {
  const data = [
    { name: "Comfortable", value: 90 },
    { name: "Absence of knowledge", value: 10 },
  ];
  return (
    <div className="my-chart">
      <h1>Express.js Skills</h1>

      <PieChart className="ms-5" width={600} height={600}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />

        <Tooltip />
      </PieChart>
      <h4>knowledge Count 100%</h4>
    </div>
  );
};

export default ExpressCollection;
