import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const CssCollection = () => {
  const data = [
    { name: "Comfortable", value: 95 },
    { name: "Absence of knowledge", value: 5 },
  ];
  return (
    <div className="my-chart">
      <h1>CSS Skills</h1>

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

export default CssCollection;
