import Title from "../Common/Title";
import DashboardButton from "./../Common/DashboardButton";

const EmployeeDetail = () => {
  return (
    <>
      <Title title="جزئیات پروفایل کارمند" />
      <div className="bg-gray-100 sm:p-10 p-5 sm:mx-6 rounded-md">
        <div className="flex flex-col mb-10">
          <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-full"></div>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-8">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام و نام خانوادگی
            </span>
            <p className="text-gray-700 mt-2">لیلا کردی</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              سمت شغلی
            </span>
            <p className="text-gray-700 mt-2">مدیر پروژه</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              دپارتمان
            </span>
            <p className="text-gray-700 mt-2">بازاریابی</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              شماره تماس
            </span>
            <p className="text-gray-700 mt-2">0913973456</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">ایمیل</span>
            <p className="text-gray-700 mt-2">leylakordi@gmail.com</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              تاریخ استخدام
            </span>
            <p className="text-gray-700 mt-2">۱۳۸۱/۰۴/۱۱</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              آیدی تلگرام
            </span>
            <p className="text-gray-700 mt-2">۱۳۸۱/۰۴/۱۱</p>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-10">
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
    </>
  );
};

export default EmployeeDetail;
