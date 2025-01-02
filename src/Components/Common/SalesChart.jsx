import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

const SalesChart = ({ title, chart_info }) => {
  const data = {
    labels: ["مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
    datasets: [
      {
        label: "Sales ($)",
        data: [1000, 1500, 1200, 2000, 2500, 2300, 2800],
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        pointBackgroundColor: "#36A2EB",
        pointBorderColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
        labels: {
          boxWidth: 10,
          color: "#153D8A",
        },
      },
    },
  };

  return (
    <div className="bg-[#F1F1F9] rounded-xl p-4 flex justify-between items-center">
      <div className="flex flex-col justify-between mr-4 h-56">
        <h1 className="text-xl font-bold mb-2 text-[#153D8A]">{title}</h1>
        <p className="text-sm text-black">
          <span className="inline-block bg-[#153D8A] w-2 h-2 rounded-full ml-1"></span>
          {chart_info}
        </p>
      </div>
      <div className="h-60">
        <Line className="h-52" data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesChart;
