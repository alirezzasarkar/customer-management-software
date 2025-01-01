// ProductListEntry.jsx
import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashBoardDropDown";
import DashboardDropDownCategory from "../Common/DashboardDropDownCategory";
import DashboardInputs from "../Common/DashBoardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import ProductImage from "../Common/ProductImage";
import Title from "../Common/Title";

const ProductListEntry = ({
  categories, // دسته‌بندی‌ها
  statuses,
  onStatusSelect,
  onInputChange,
  onImageUpload,
  onSubmit,
  formData,
  selectedStatus,
  onCategorySelect, // هندلر دسته‌بندی
  loadingCategories, // وضعیت بارگذاری دسته‌بندی‌ها
}) => {
  return (
    <>
      <Title title="وارد کردن محصول" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <form className="flex flex-col gap-7" onSubmit={onSubmit}>
          <div className="flex justify-between">
            <DashboardInputs
              lable_text="نام محصول"
              placeholder_text="نام محصول خود را وارد کنید"
              value={formData.productName}
              onChange={(e) => onInputChange("productName", e.target.value)}
            />
            <DashboardInputs
              lable_text="رنگ محصول"
              placeholder_text="رنگ محصول خود را وارد کنید"
              value={formData.productColor}
              onChange={(e) => onInputChange("productColor", e.target.value)}
            />
            <DashboardInputs
              lable_text="اندازه محصول"
              placeholder_text="۱۱۰ × ۲۱۵ × ۲۰ سانتی متر"
              value={formData.productSize}
              onChange={(e) => onInputChange("productSize", e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <DashboardDropDownCategory
              label_text="دسته بندی محصول"
              items={categories}
              onSelect={onCategorySelect}
              selectedItems={formData.category.map((catId) => ({
                id: catId,
                category_name:
                  categories.find((cat) => cat.id === catId)?.category_name ||
                  "",
              }))}
              multiple={true}
            />
            <DashboardInputs
              lable_text="قیمت محصول"
              value={formData.productPrice}
              placeholder_text="قیمت محصول خود را وارد کنید"
              onChange={(e) => onInputChange("productPrice", e.target.value)}
            />
            <DashboardDropDown
              label_text="وضعیت"
              items={statuses}
              onSelect={onStatusSelect}
              selectedItem={selectedStatus}
              multiple={false} // تک انتخابی
            />
          </div>
          <DashboardTextarea
            label_text="مستندات تکمیلی"
            placeholder_text="لورم ایپسوم با متن ساختگی ..."
            value={formData.productDescription}
            onChange={(e) =>
              onInputChange("productDescription", e.target.value)
            }
          />
          <div className="">
            <ProductImage
              upload_text="تصاویر خود را آپلود کنید"
              onUpload={onImageUpload}
            />
          </div>
          <div className="flex justify-center mt-8 mb-2">
            <DashboardButton
              inner_text="ثبت محصول"
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
