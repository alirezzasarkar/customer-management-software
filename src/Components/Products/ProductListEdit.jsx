// Components/Products/ProductListEdit.jsx

import React from "react";
import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashboardDropDown";
import DashboardDropDownCategory from "../Common/DashboardDropDownCategory";
import DashboardInputs from "../Common/DashboardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import ProductImage from "../Common/ProductImage";
import Title from "../Common/Title";

const ProductListEdit = ({
  product_name,
  product_image, // URL تصویر موجود
  categories,
  statuses,
  selectedStatus,
  onStatusSelect,
  onInputChange,
  onImageUpload, // handler برای تنظیم تصویر جدید
  onCategorySelect,
  onSubmit,
  formData,
  loading,
  loadingCategories,
  productImage, // فایل تصویر جدید
}) => {
  return (
    <>
      <Title title="ویرایش محصول" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <form onSubmit={onSubmit} className="flex flex-col gap-7">
          {/* بخش اول فرم شامل نام محصول، رنگ و برند */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardInputs
              label_text="نام محصول"
              placeholder_text="نام محصول خود را وارد کنید"
              value={formData.productName}
              onChange={(e) => onInputChange("productName", e.target.value)}
            />
            <DashboardInputs
              label_text="رنگ محصول"
              placeholder_text="رنگ محصول خود را وارد کنید"
              value={formData.productColor}
              onChange={(e) => onInputChange("productColor", e.target.value)}
            />
            <DashboardInputs
              label_text="برند محصول"
              placeholder_text="برند محصول خود را وارد کنید"
              value={formData.brand}
              onChange={(e) => onInputChange("brand", e.target.value)}
            />
          </div>

          {/* بخش دوم فرم شامل دسته‌بندی، اندازه و وضعیت */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardDropDownCategory
              label_text="دسته‌بندی محصول"
              items={categories}
              onSelect={onCategorySelect}
              loading={loadingCategories}
              selectedItems={formData.category.map((catId) => ({
                id: catId,
                category_name:
                  categories.find((cat) => cat.id === catId)?.category_name ||
                  "",
              }))}
              multiple={true}
            />
            <DashboardInputs
              label_text="اندازه محصول"
              placeholder_text="اندازه محصول خود را وارد کنید"
              value={formData.productSize}
              onChange={(e) => onInputChange("productSize", e.target.value)}
            />
            <DashboardDropDown
              label_text="وضعیت"
              items={statuses}
              onSelect={onStatusSelect}
              selectedItem={selectedStatus}
              multiple={false}
            />
          </div>

          {/* بخش سوم فرم شامل قیمت و توضیحات */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardInputs
              label_text="قیمت محصول (تومان)"
              placeholder_text="قیمت محصول را وارد کنید"
              value={formData.productPrice}
              onChange={(e) => onInputChange("productPrice", e.target.value)}
            />
            <DashboardTextarea
              label_text="مستندات تکمیلی"
              placeholder_text="توضیحات تکمیلی را وارد کنید"
              value={formData.productDescription}
              onChange={(e) =>
                onInputChange("productDescription", e.target.value)
              }
            />
            {/* اضافه کردن یک فضای خالی یا فیلد دیگر در صورتی که نیاز باشد */}
            <div></div>
          </div>

          {/* بخش آپلود تصویر محصول */}
          <div>
            <ProductImage
              upload_text="تصویر محصول را آپلود کنید"
              onUpload={onImageUpload}
              image={productImage} // فایل تصویر جدید یا null
            />
          </div>

          {/* دکمه ثبت تغییرات */}
          <div className="flex justify-center mt-8 mb-2">
            <DashboardButton
              inner_text={loading ? "در حال ارسال..." : "ذخیره تغییرات"}
              icon="/images/Tick.svg"
              bg_color="bg-[#13A538]"
              button_type="submit"
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductListEdit;
