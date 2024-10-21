import { minimizeNumber } from "./utils.js";

// Create the chart after the DOM is fully loaded
const ctx = document.getElementById("chart").getContext("2d");

Chart.defaults.backgroundColor = "yellow";
Chart.defaults.color = "#fff";

export const buildChart = async ({ data }) => {
 new Chart(ctx, {
  type: "bar",
  options: {
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
   },
  },
  data: {
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
  },
 });
};
