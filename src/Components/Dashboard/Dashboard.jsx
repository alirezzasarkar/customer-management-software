import DashboardCharts from "../Common/Chart";
import DashboardBox from "../Common/DashboardBox";
import SecondDashboardBox from "../Common/SecondDashboardBox";
import Title from "../Common/Title";

const Dashboard = ({
  marketing_status,
  sales_data,
  customer_data,
  sales_opportunity,
  customer_chart,
  sales_chart,
}) => {
  return (
    <>
      <Title title="داشبورد" />
      <div className="sm:mx-6">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
          <DashboardBox
            title="کل درآمد"
            summary="مبلغ کل فروش های انجام شده"
            summary_detail={`${
              sales_data.total_sales == null
                ? 0
                : sales_data.total_sales.toLocaleString("fa-IR")
            } تومان`}
            DeatilPage="/dashboard/invoice/list"
          />
          <DashboardBox
            title="تعداد مشتریان"
            summary="مشتریان ما"
            summary_detail={`${
              customer_data.total_customers == null
                ? 0
                : customer_data.total_customers
            } نفر`}
            DeatilPage="/dashboard/customers/list"
          />
          <DashboardBox
            title="نزدیک ترین فرصت های فروش"
            summary="فرصت های فروش"
            summary_detail={`${
              sales_opportunity.closest_count == null
                ? 0
                : sales_opportunity.closest_count
            } عدد`}
            DeatilPage="/dashboard/sales-opportunities/list"
          />
        </div>
        <div className=" mt-7 md:flex lg:flex-row flex-col gap-4">
          <SecondDashboardBox
            title="میزان فروش"
            summary="تعداد کل محصولات فروخته شده"
            summary_detail={`${
              sales_data.total_products_sold == null
                ? 0
                : sales_data.total_products_sold
            } محصول`}
            second_summary="قرار داد های نهایی"
            second_summary_detail={`${
              sales_data.total_factors == null ? 0 : sales_data.total_factors
            } فاکتور`}
            DeatilPage="/dashboard/invoice/list"
          />
          <DashboardCharts
            title="جذب مشتریان"
            chartInfo="جذب مشتریان در هر ماه"
            chartType="bar"
            labels={customer_chart.labels}
            datasets={[
              {
                data: customer_chart.data,
                backgroundColor: "#13A538",
                borderColor: "#13A538",
                borderWidth: 1,
              },
            ]}
            chart_height="h-[16.8rem]"
            chart_width="w-[99.9%] md:w-full lg:w-3/4 "
          />
        </div>
        <div className="mt-7 grid lg:grid-cols-2 grid-cols-1 gap-3">
          <DashboardCharts
            title="وضعیت کمپین ها"
            chartType="doughnut"
            labels={["شروع نشده", "در حال انجام", "به پایان رسیده"]}
            datasets={[
              {
                data: [marketing_status.undone],
                backgroundColor: ["#E9001C", "#153D8A", "#13A538"],
                borderColor: "#FFFFFF",
                borderWidth: 1,
              },
            ]}
            chart_height="h-48"
          />
          <DashboardCharts
            title="تغییرات فروش"
            chartInfo="نمودار تغییرات فروش بر اساس تاریخ"
            chartType="line"
            labels={sales_chart.labels}
            datasets={[
              {
                data: sales_chart.data,
                borderColor: "#36A2EB",
                backgroundColor: "#153D8A",
                pointBackgroundColor: "#36A2EB",
                pointBorderColor: "#fff",
              },
            ]}
            chart_height="h-52 md:h-60"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
