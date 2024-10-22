import { minimizeNumber } from "./utils.js";

// Create the chart after the DOM is fully loaded
const ctx = document.getElementById("chart").getContext("2d");

Chart.defaults.backgroundColor = "yellow";
Chart.defaults.color = "#fff";

const alternatingBackgroundColorPlugin = {
 id: "customCanvasBackgroundColor", // Plugin ID
 beforeDraw: (chart, args, options) => {
  const {
   ctx,
   chartArea: { top, left, width, height },
  } = chart;
  const { datasets } = chart.data;

  ctx.save();

  // Define alternating colors (green and red)
  const colors = ["#0f172a", "#1e293b"];

  // Loop through each bar and set the background color
  datasets.forEach((dataset, __) => {
   dataset.data.forEach((_, index) => {
    // Calculate the width of each bar
    const barWidth = width / dataset.data.length;

    // Determine the background color for each bar
    const color = colors[index % colors.length]; // Alternates between green and red
    const topOffset = 100;

    // Draw the background for each bar
    ctx.fillStyle = color;
    // ctx.fillRect(x,y, width, heigh);
    ctx.fillRect(
     left + index * barWidth,
     top - topOffset,
     barWidth,
     height + topOffset
    );
   });
  });

  ctx.restore();
 },
};
Chart.register(alternatingBackgroundColorPlugin);

export const buildChart = async ({ data }) => {
 // we have to destroy the preview chart to re-draw a new chart
 if (Chart.getChart(ctx)) {
  Chart.getChart(ctx)?.destroy();
 }
 // chart data
 const chart_data = {
  labels: data.map((row) => row.hours),
  datasets: [
   {
    data: data.map((row) => row.users),
    borderRadius: 50,
    barThickness: 25,
    backgroundColor: "#fffd8c",
    hoverBackgroundColor: "#ffc800",
   },
  ],
 };

 const options = {
  scales: {
   y: {
    ticks: {
     callback: function (value) {
      return minimizeNumber(value) + " –";
     },
    },
   },
  },
  plugins: {
   legend: {
    display: false,
   },
   tooltip: {
    enabled: false,
   },
   customCanvasBackgroundColor: {
    color: ["#0f172a", "#1e293b"],
   },
  },
 };
 // configuration
 const config = {
  type: "bar",
  data: chart_data,
  options,
 };
 // chart creation
 new Chart(ctx, config);
};
