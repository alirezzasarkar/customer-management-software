import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashBoardDropDown";
import DashboardInputs from "../Common/DashBoardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import ProductImage from "../Common/ProductImage";
import Title from "../Common/Title";

const ProductListEntry = () => {
  return (
    <>
      <Title title=" وارد کردن محصول" />
      <div className="bg-gray-100 p-5 sm:mx-6 mx-0 rounded-md">
        <form className="sm:justify-between flex flex-col gap-7">
          <div className=" flex justify-between sm:flex-row flex-col gap-7">
            <DashboardInputs
              lable_text="نام محصول"
              placeholder_text="نام محصول خود را وارد کنید"
            />
            <DashboardInputs
              lable_text="رنگ محصول"
              placeholder_text="رنگ محصول خود را وارد کنید"
            />
            <DashboardInputs
              lable_text="اندازه محصول"
              placeholder_text="۱۱۰ × ۲۱۵ × ۲۰ سانتی متر "
            />
          </div>
          <div className="flex justify-between sm:flex-row flex-col gap-7">
            <DashboardDropDown label_text="دسته بندی محصول" />
            <DashboardInputs
              lable_text="قیمت محصول"
              placeholder_text="قیمت محصول خود را وارد کنید"
            />
            <DashboardInputs
              lable_text="وضعیت"
              placeholder_text="فعال , غیر فعال , پیش فرض"
            />
          </div>
          <DashboardTextarea
            label_text="مستندات تکمیلی"
            placeholder_text="لورم ایپسوم با متن ساختگی ..."
          />
          <div className="">
            <ProductImage upload_text="تصاویر خود را اپلود کنید" />
          </div>
          <div className="flex justify-center mt-8 mb-2">
            <DashboardButton
              inner_text="ثبت محصول "
              icon="/src/Assets/Icons/Tick.svg"
              bg_color="bg-[#13A538]"
              button_type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductListEntry;
