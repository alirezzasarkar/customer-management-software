import { useNavigate } from "react-router-dom";
import DashboardButton from "../Common/DashboardButton";
import Title from "../Common/Title";

const ProductsDetail = ({ data, onDelete }) => {
  const {
    product_name,
    price,
    size,
    brand,
    color,
    status,
    category,
    product_image,
    description,
    product_id,
  } = data;

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/dashboard/products/edit/${data.id}`);
  };

  return (
    <>
      <Title title="جزئیات محصول" />
      <div className="bg-gray-100 p-10 mx-6 rounded-md">
        <div className="grid grid-cols-3 gap-10 mb-8">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام محصول
            </span>
            <p className="text-gray-700 mt-2">{product_name}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              رنگ محصول
            </span>
            <p className="text-gray-700 mt-2">{color}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">برند</span>
            <p className="text-gray-700 mt-2">{brand}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              اندازه محصول
            </span>
            <p className="text-gray-700 mt-2">{size}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              قیمت محصول
            </span>
            <p className="text-gray-700 mt-2">{price}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">وضعیت</span>
            <p className="text-gray-700 mt-2">{status}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              دسته بندی
            </span>
            <p className="text-gray-700 mt-2">{category}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">توضیحات</span>
            <p className="text-gray-700 mt-2 leading-relaxed">{description}</p>
          </div>
        </div>

        <div className="flex justify-start mt-16 mb-10">
          <img
            src={product_image || "https://via.placeholder.com/150"}
            alt={product_name}
            className="w-40 h-auto rounded-md shadow-md"
          />
        </div>

        <div className="flex justify-center gap-5 mt-10">
          <DashboardButton
            inner_text="ویرایش اطلاعات"
            icon="/images/edit.svg"
            bg_color="bg-[#FF6500]"
            hover_state="hover:bg-[#FF6500] opacity-80"
            onClick={handleEditClick}
          />
          <DashboardButton
            inner_text="حذف محصول"
            icon="/images/delete.svg"
            bg_color="bg-[#FF0000]"
            hover_state="hover:bg-[#FF0000]"
            onClick={onDelete}
          />
        </div>
      </div>
    </>
  );
};

export default ProductsDetail;
