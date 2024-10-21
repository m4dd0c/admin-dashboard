// Create the chart after the DOM is fully loaded
const ctx = document.getElementById("chart").getContext("2d");

export const buildChart = async ({ data }) => {
 new Chart(ctx, {
  type: "bar",
  options: {
   animation: false,
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
   labels: data.map((row) => row.year),
   datasets: [
    {
     label: "Acquisitions by year",
     data: data.map((row) => row.count),
    },
   ],
  },
 });
};
