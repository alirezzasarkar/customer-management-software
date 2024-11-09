import Table from "../Common/Table";
import Title from "../Common/Title";
import DashboardButton from "./../Common/DashboardButton";

const initialData = [
  {
    id: 1,
    product_name: "گوشی موبایل",
    price: "۷۵۰۰۰۰۰",
    category: "الکترونیک",
  },
  {
    id: 2,
    product_name: "لپ‌تاپ",
    price: "۲۵۰۰۰۰۰۰",
    category: "کامپیوتر",
  },
  {
    id: 3,
    product_name: "تلویزیون",
    price: "۱۸۰۰۰۰۰۰",
    category: "الکترونیک",
  },
  {
    id: 4,
    product_name: "ماشین لباسشویی",
    price: "۱۴۰۰۰۰۰۰",
    category: "لوازم خانگی",
  },
];

const columns = [
  { id: "product_name", label: "نام محصول" },
  { id: "price", label: "قیمت محصول" },
  { id: "category", label: "دسته بندی" },
];

const ContractDetail = () => {
  return (
    <>
      <Title title="جزئیات فاکتور" />
      <div className="bg-gray-100 p-10 mx-6 rounded-md">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام و نام خانوادگی
            </span>
            <p className="text-gray-700 mt-2">لیلا کردی</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              مبلغ فاکتور
            </span>
            <p className="text-gray-700 mt-2">۳۰,۰۰۰,۰۰۰ تومان</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              تاریخ ثبت فاکتور
            </span>
            <p className="text-gray-700 mt-2">۱۳۸۱/۰۴/۱۱</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">توضیحات</span>
            <p className="text-gray-700 mt-2">خدمات پس از فروش</p>
          </div>
          <div className="flex flex-col mt-2">
            <a href="#" download className="text-blue-500 flex items-center">
              <img
                src="/src/Assets/Icons/download.svg"
                alt="Download"
                className="w-4 h-4 ml-2"
              />
              دانلود فایل آپلود شده
            </a>
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

      <div className="bg-gray-100 mx-6 rounded-md mt-7">
        <Table columns={columns} data={initialData} />
      </div>
    </>
  );
};

export default ContractDetail;
