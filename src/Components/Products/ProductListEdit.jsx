import React, { useEffect, useState } from "react";
import { updateProduct } from "../../Services/APIs/Products"; // Import the updateProduct API function
import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashBoardDropDown";
import DashboardInputs from "../Common/DashBoardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import ProductImage from "../Common/ProductImage";
import Title from "../Common/Title";

const ProductListEdit = ({ productData }) => {
  const [formData, setFormData] = useState({
    product_name: "",
    price: "",
    size: "",
    color: "",
    status: "",
    category: "",
    description: "",
    product_image: "",
  });

  const [loading, setLoading] = useState(false); // To manage loading state
  const [error, setError] = useState(null); // To manage errors after the API call

  useEffect(() => {
    if (productData) {
      setFormData({
        product_name: productData.product_name || "",
        price: productData.price || "",
        size: productData.size || "",
        color: productData.color || "",
        status: productData.status || "",
        category: productData.category || "",
        description: productData.description || "",
        product_image: productData.product_image || "",
      });
    }
  }, [productData]);

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear previous errors

    try {
      const updatedProduct = await updateProduct(productData.id, formData); // Pass product ID and form data
      console.log("Product updated successfully:", updatedProduct);
    } catch (error) {
      setError("There was an error updating the product. Please try again.");
      console.error(error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <Title title="ویرایش محصول" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          <div className="flex justify-between">
            <DashboardInputs
              label_text="نام محصول"
              value={formData.product_name}
              onChange={(e) =>
                handleInputChange("product_name", e.target.value)
              }
              placeholder_text="نام محصول خود را وارد کنید"
            />
            <DashboardInputs
              label_text="رنگ محصول"
              value={formData.color}
              onChange={(e) => handleInputChange("color", e.target.value)}
              placeholder_text="رنگ محصول خود را وارد کنید"
            />
            <DashboardInputs
              label_text="اندازه محصول"
              value={formData.size}
              onChange={(e) => handleInputChange("size", e.target.value)}
              placeholder_text="۱۱۰ × ۲۱۵ × ۲۰ سانتی متر"
            />
          </div>
          <div className="flex justify-between">
            <DashboardDropDown
              label_text="دسته بندی محصول"
              value={formData.category}
              onChange={(e) => handleInputChange("category", e.target.value)}
            />
            <DashboardInputs
              label_text="قیمت محصول"
              value={formData.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
              placeholder_text="قیمت محصول خود را وارد کنید"
            />
            <DashboardInputs
              label_text="وضعیت"
              value={formData.status}
              onChange={(e) => handleInputChange("status", e.target.value)}
              placeholder_text="فعال , غیر فعال , پیش فرض"
            />
          </div>
          <DashboardTextarea
            label_text="مستندات تکمیلی"
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            placeholder_text="لورم ایپسوم با متن ساختگی ..."
          />
          <div className="">
            <ProductImage
              upload_text="تصاویر خود را اپلود کنید"
              image={formData.product_image} // Display image if available
            />
          </div>
          {error && <div className="text-red-600 text-center">{error}</div>}{" "}
          {/* Display error message */}
          <div className="flex justify-center mt-8 mb-2">
            <DashboardButton
              inner_text={loading ? "در حال ارسال..." : "تغییرات"}
              icon="/src/Assets/Icons/Tick.svg"
              bg_color="bg-[#13A538]"
              button_type="submit"
              disabled={loading} // Disable button while loading
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductListEdit;
