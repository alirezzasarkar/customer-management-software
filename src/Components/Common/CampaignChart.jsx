import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CampainChart = ({ title }) => {
  const data = {
    labels: ["شروع نشده", "در حال انجام", "به پایان رسیده"],
    datasets: [
      {
        data: [1, 2, 3],
        backgroundColor: ["#E9001C", "#153D8A", "#13A538"],
        borderColor: "#FFFFFF",
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
  };

  return (
    <div className="bg-[#F1F1F9] rounded-xl p-4 flex md:justify-between md:flex-row flex-col items-center ">
      <div className="flex flex-col justify-between mr-4 h-56">
        <h1 className="text-xl font-bold mb-2 text-[#153D8A]">{title}</h1>
        <ul className="flex flex-col gap-3 text-sm">
          {data.labels.map((label, index) => (
            <li key={index} className="flex items-center gap-2">
              <span
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[index],
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
      </div>
      <div className="h-48 w-64">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default CampainChart;
