import Title from "../Common/Title";
import DashboardButton from "./../Common/DashboardButton";

const UserDetail = () => {
  return (
    <>
      <Title title="جزئیات پروفایل کارمند" />
      <div className="bg-gray-100 p-10 mx-6 rounded-md">
        {/* آپلود عکس */}
        <div className="flex flex-col mb-10">
          <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-full"></div>
        </div>
        {/* اطلاعات کاربر */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* نام و نام خانوادگی */}
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام و نام خانوادگی
            </span>
            <p className="text-gray-700 mt-2">لیلا کردی</p>
          </div>

          {/* سمت شغلی */}
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              سمت شغلی
            </span>
            <p className="text-gray-700 mt-2">مدیر پروژه</p>
          </div>

          {/* دپارتمان */}
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              دپارتمان
            </span>
            <p className="text-gray-700 mt-2">بازاریابی</p>
          </div>

          {/* شماره تماس */}
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              شماره تماس
            </span>
            <p className="text-gray-700 mt-2">0913973456</p>
          </div>

          {/* ایمیل */}
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">ایمیل</span>
            <p className="text-gray-700 mt-2">leylakordi@gmail.com</p>
          </div>

          {/* تاریخ استخدام */}
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              تاریخ استخدام
            </span>
            <p className="text-gray-700 mt-2">۱۳۸۱/۰۴/۱۱</p>
          </div>
        </div>

        {/* تاریخ استخدام */}
        <div className="flex flex-col">
          <span className="text-sm text-blue-800 font-semibold">
            آیدی تلگرام
          </span>
          <p className="text-gray-700 mt-2">۱۳۸۱/۰۴/۱۱</p>
        </div>

        {/* دکمه‌ها */}
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

export default UserDetail;
