// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

// function BarChart({ chartData }) {
//   return (
//     <div className="h-fit w-fit p-2 flex justify-center bg-blue-100 rounded-2xl bigShadow">
//       <Bar data={chartData} width={630} height={130} />
//     </div>
//   );
// }

// export default BarChart;


import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return (
    <div className="chart-container bg-blue-100 rounded-2xl bigShadow" style={{ width: "600px", height: "300px",marginLeft: "150px" }}>
      <Bar data={chartData} />
    </div>
  );
}

export default BarChart;
