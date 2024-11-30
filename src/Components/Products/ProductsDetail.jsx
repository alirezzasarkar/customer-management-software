import Title from "../Common/Title";
import DashboardButton from "./../Common/DashboardButton";

const ProductDetail = () => {
  return (
    <>
      <Title title="جزئیات محصول" />
      <div className="bg-gray-100 sm:p-10 p-5 sm:mx-6 rounded-md">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-8">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام محصول
            </span>
            <p className="text-gray-700 mt-2">درب ضد سرقت</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              رنگ محصول
            </span>
            <p className="text-gray-700 mt-2">قهوه ای تیره</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              اندازه محصول
            </span>
            <p className="text-gray-700 mt-2">110 × 215 × 20 سانتی متر</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              قیمت محصول
            </span>
            <p className="text-gray-700 mt-2">۳۰,۰۰۰,۰۰۰ تومان</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">وضعیت</span>
            <p className="text-gray-700 mt-2">پیش فروش</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              دسته بندی محصول
            </span>
            <p className="text-gray-700 mt-2">روکش چوبی درب</p>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <span className="text-sm text-blue-800 font-semibold">
            مستندات تکمیلی
          </span>
          <p className="text-gray-700 mt-2 leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-10">
          <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-md">
            <span className="text-2xl text-gray-400">+</span>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-10">
          <DashboardButton
            inner_text="ویرایش محصول"
            icon="/src/Assets/Icons/edit.svg"
            bg_color="bg-[#FF6500]"
            hover_state="hover:bg-[#FF6500]"
          />
          <DashboardButton
            inner_text="حذف محصول"
            icon="/src/Assets/Icons/delete.svg"
            bg_color="bg-[#FF0000]"
            hover_state="hover:bg-[#FF0000]"
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
