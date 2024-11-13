import Title from "../Common/Title";
import DashboardInputs from "../Common/DashBoardInputs";
import DashboardDropDown from "../Common/DashBoardDropDown";
import DashboardTextarea from "../Common/DashboardTextarea";
import DashboardButton from "../Common/DashboardButton";
import ProductImage from "../Common/ProductImage";

const ProductListEdit = () => {
  return (
    <>
      <Title title="ویرایش محصول" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <form className="flex flex-col gap-7">
          <div className="flex justify-between">
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
          <div className="flex justify-between">
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
              inner_text="تغییرات"
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

export default ProductListEdit;
