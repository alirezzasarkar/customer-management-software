import Title from "../Common/Title";
import DashboardButton from "./../Common/DashboardButton";

const SalesOpportunitiesDetail = () => {
  return (
    <div className="">
      <Title title="جزئیات فرصت فروش" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام و نام خانوادگی
            </span>
            <p className="text-gray-700 mt-2">لیلا کردی</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              تاریخ پیگیری
            </span>
            <p className="text-gray-700 mt-2">۱۳۸۱/۰۴/۱۱</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              اولویت فرصت
            </span>
            <p className="text-gray-700 mt-2">متوسط</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-10 mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              محصول مورد نظر
            </span>
            <p className="text-gray-700 mt-2">درب ضد سرقت</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              مبلغ تخمینی
            </span>
            <p className="text-gray-700 mt-2">۳۰۰,۰۰۰,۰۰۰ تومان</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              افزودن یادداشت
            </span>
            <p className="text-gray-700 mt-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-20">
          <DashboardButton
            inner_text="ویرایش اطلاعات"
            icon="/src/Assets/Icons/edit.svg"
            bg_color="bg-[#FF6500]"
            hover_state="hover:bg-[#FF6500]"
          />
          <DashboardButton
            inner_text="حذف اطلاعات"
            icon="/src/Assets/Icons/delete.svg"
            bg_color="bg-[#FF0000]"
            hover_state="hover:bg-[#FF0000]"
          />
        </div>
      </div>
    </div>
  );
};

export default SalesOpportunitiesDetail;
