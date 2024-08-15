// components/ProbabilityBarGraph.js

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraph = ({ data }) => {
  const chartData = {
    labels: [`Probability of Class 0: ${parseFloat(data[0][0]).toFixed(3)}`, `Probability of Class 1: ${parseFloat(data[0][1]).toFixed(3)}`],
    datasets: [
      {
        label: "",
        data: data[0],
        backgroundColor: [ "rgba(255, 99, 132, 0.6)","rgba(75, 192, 192, 0.6)"],
        borderColor: [ "rgba(255, 99, 132, 1)","rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarGraph;
