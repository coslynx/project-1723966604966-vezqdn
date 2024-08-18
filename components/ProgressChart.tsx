"use client";

import { useState, useEffect } from "react";
import { LineController, LineElement, CategoryScale, PointElement, LinearScale, Title, Tooltip } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useStore } from "@/store";
import { formatDate } from "@/utils/formatData";

Chart.register(LineController, LineElement, CategoryScale, PointElement, LinearScale, Title, Tooltip);

export default function ProgressChart() {
  const [chartData, setChartData] = useState([]);
  const { goals } = useStore();

  useEffect(() => {
    if (goals.length > 0) {
      const chartData = goals.map((goal) => {
        const dataPoints = goal.progressData.map((dataPoint) => ({
          x: formatDate(dataPoint.date),
          y: dataPoint.value,
        }));
        return {
          label: goal.name,
          data: dataPoints,
          borderColor: `hsl(${Math.random() * 360}, 50%, 50%)`,
        };
      });
      setChartData(chartData);
    }
  }, [goals]);

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Progress Chart",
        font: {
          size: 20,
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-lg">
      {chartData.length > 0 ? (
        <Chart type="line" data={{ datasets: chartData }} options={chartOptions} />
      ) : (
        <p className="text-gray-500">No progress data available yet.</p>
      )}
    </div>
  );
}