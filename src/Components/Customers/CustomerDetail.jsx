import Table from "../Common/Table";
import Title from "../Common/Title";
import DashboardButton from "./../Common/DashboardButton";

const initialData = [
  { id: 1, date: "۱۳۸۱/۰۴/۱۱", amount: "۳۰۰,۰۰۰,۰۰۰", status: "فعال - مشخص" },
  { id: 2, date: "۱۳۸۱/۰۴/۱۱", amount: "۳۰۰,۰۰۰,۰۰۰", status: "فعال - مشخص" },
  { id: 3, date: "۱۳۸۱/۰۴/۱۱", amount: "۳۰۰,۰۰۰,۰۰۰", status: "فعال - مشخص" },
  { id: 4, date: "۱۳۸۱/۰۴/۱۱", amount: "۳۰۰,۰۰۰,۰۰۰", status: "فعال - مشخص" },
];

const columns = [
  { id: "status", label: "وضعیت فاکتور" },
  { id: "amount", label: "مبلغ فاکتور" },
  { id: "date", label: "تاریخ ثبت" },
];

const CustomerDetail = () => {
  return (
    <>
      <Title title="جزئیات پروفایل مشتری" />
      <div className="bg-gray-100 p-10 mx-6 rounded-md">
        <div className="flex mb-10">
          <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-full border-4 border-yellow-400"></div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام و نام خانوادگی
            </span>
            <p className="text-gray-700 mt-2">لیلا کردی</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              تاریخ تولد
            </span>
            <p className="text-gray-700 mt-2">۱۳۸۱/۰۴/۱۱</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">کد ملی</span>
            <p className="text-gray-700 mt-2">۴۹۸۱۶۲۳۷۸۹</p>
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
              آیدی تلگرام
            </span>
            <p className="text-gray-700 mt-2">@leylakordi2002</p>
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              آیدی اینستاگرام
            </span>
            <p className="text-gray-700 mt-2">@leylakordi2002</p>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-5">
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

      <div className="bg-gray-100 mx-6 rounded-md mt-7">
        <Table columns={columns} data={initialData} />
      </div>
    </>
  );
};

export default CustomerDetail;
