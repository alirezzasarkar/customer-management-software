import DashboardCharts from "../Common/Chart";
import DashboardBox from "../Common/DashboardBox";
import SecondDashboardBox from "../Common/SecondDashboardBox";
import Title from "../Common/Title";

const Dashboard = () => {
  return (
    <>
      <Title title="داشبورد" />
      <div className="md:px-6">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          <DashboardBox
            title="کل درآمد"
            summary="مبلغ کل فروش های انجام شده"
            summary_detail="۱۶۰,۰۰۰,۰۰۰ تومان"
          />
          <DashboardBox
            title="تعداد مشتریان"
            summary="مشتریان ما"
            summary_detail="۱۰۰ نفر"
          />
          <DashboardBox
            title="نزدیک ترین فرصت های فروش"
            summary="فرصت های فروش"
            summary_detail="۱۰ عدد"
          />
        </div>
        <div className=" mt-7 md:flex md:flex-row flex-col gap-4">
          <SecondDashboardBox
            title="میزان فروش"
            summary="تعداد کل محصولات فروخته شده"
            summary_detail="۱۰۰ محصول"
            second_summary="قرار داد های نهایی"
            second_summary_detail="۲۵ فاکتور"
          />
          <DashboardCharts
            title="جذب مشتریان"
            chartInfo="جذب مشتریان در هر ماه"
            chartType="bar"
            labels={["مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]}
            datasets={[
              {
                data: [1, 2, 3, 4, 5, 6, 7],
                backgroundColor: "#13A538",
                borderColor: "#13A538",
                borderWidth: 1,
              },
            ]}
            chart_height="h-[16.8rem]"
            chart_width="md:w-3/4"
          />
        </div>
        <div className="mt-7 grid md:grid-cols-2 grid-cols-1 gap-3">
          <DashboardCharts
            title="وضعیت کمپین ها"
            chartType="doughnut"
            labels={["شروع نشده", "در حال انجام", "به پایان رسیده"]}
            datasets={[
              {
                data: [1, 2, 3],
                backgroundColor: ["#E9001C", "#153D8A", "#13A538"],
                borderColor: "#FFFFFF",
                borderWidth: 1,
              },
            ]}
            chart_height="h-48"
          />
          <DashboardCharts
            title="تغییرات فروش"
            chartInfo="لورم ایپسوم متن ساختگی"
            chartType="line"
            labels={["مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]}
            datasets={[
              {
                label: "Sales ($)",
                data: [1000, 1500, 1200, 2000, 2500, 2300],
                borderColor: "#36A2EB",
                backgroundColor: "#153D8A",
                pointBackgroundColor: "#36A2EB",
                pointBorderColor: "#fff",
              },
            ]}
            chart_height="h-[15rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
