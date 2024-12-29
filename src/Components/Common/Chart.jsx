import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

const DashboardCharts = ({
  title,
  chartInfo,
  chartType = "bar",
  labels = [],
  datasets = [],
  chart_height,
  chart_width,
}) => {
  const data = { labels, datasets };

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
    scales:
      chartType === "doughnut"
        ? {}
        : {
            x: { title: { display: true } },
          },
  };

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return <Bar data={data} options={options} />;
      case "doughnut":
        return <Doughnut data={data} options={options} />;
      case "line":
        return <Line data={data} options={options} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`bg-[#F1F1F9] rounded-xl p-4 flex flex-col md:flex-row justify-between md:items-center ${chart_width} md:mt-0 mt-5`}
    >
      <div className="flex flex-col justify-between mr-4 h-52">
        <h1 className="text-xl font-bold mb-2 text-[#153D8A]">{title}</h1>
        {chartType === "doughnut" ? (
          <ul className="flex flex-col gap-3 text-sm">
            {labels.map((label, index) => (
              <li key={index} className="flex items-center gap-2">
                <span
                  style={{
                    backgroundColor: datasets[0]?.backgroundColor[index],
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></span>
                {label}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-black">
            <span
              className="inline-block w-2 h-2 rounded-full ml-1"
              style={{
                backgroundColor: datasets[0]?.backgroundColor || "#153D8A",
              }}
            ></span>
            {chartInfo}
          </p>
        )}
      </div>
      <div className={`${chart_height} w-full md:w-[60.5%]`}>
        {renderChart()}
      </div>
    </div>
  );
};

export default DashboardCharts;
