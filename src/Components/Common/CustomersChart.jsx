import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CustomersChart = ({
  title = "Chart Title",
  chart_info = "Chart Info",
}) => {
  const data = {
    labels: ["مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
    datasets: [
      {
        data: [1, 2, 3, 4, 5, 6, 7],
        backgroundColor: "#13A538",
        borderColor: "#13A538",
        borderWidth: 1,
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
        rtl: true,
        textDirection: "rtl",
      },
    },

    scales: {
      x: {
        title: {
          display: true,
        },
      },
    },
  };

  return (
    <div className="bg-[#F1F1F9] rounded-xl p-4 flex justify-between items-center md:w-[66.5%]">
      <div className="flex flex-col justify-between mr-4 h-56">
        <h1 className="text-xl font-bold mb-2 text-[#153D8A]">{title}</h1>
        <p className="text-sm text-black">
          <span className="inline-block bg-[#13A538] w-2 h-2 rounded-full ml-1"></span>
          {chart_info}
        </p>
      </div>
      <div className="">
        <Bar className="h-64" data={data} options={options} />
      </div>
    </div>
  );
};

export default CustomersChart;
