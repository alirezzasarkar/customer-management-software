import { useNavigate } from "react-router-dom";
import DashboardButton from "../Common/DashboardButton";
import Title from "../Common/Title";

const SalesOpportunitiesDetail = ({ data, onDelete }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/dashboard/sales-opportunities/edit/${data.id}`);
  };

  const getBuyerTypeInPersian = (rank) => {
    switch (rank) {
      case "OM":
        return "عمده";
      case "KH":
        return "خرده";
      default:
        return "مشخص نشده";
    }
  };

  return (
    <div>
      <Title title="جزئیات فرصت فروش" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام و نام خانوادگی مشتری
            </span>
            <p className="text-gray-700 mt-2">{data.customer_name}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              تاریخ پیگیری
            </span>
            <p className="text-gray-700 mt-2">{data.follow_up_date}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              اولویت فرصت
            </span>
            <p className="text-gray-700 mt-2">{data.opportunity_priority}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-10 mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              محصولات مورد نظر
            </span>
            <ul className="mt-2">
              {data.products.map((product, index) => (
                <li key={index} className="text-gray-700">
                  {product.name} (تعداد: {product.quantity})
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              مبلغ تخمینی
            </span>
            <p className="text-gray-700 mt-2">{data.estimated_amount} تومان</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نوع خرید مشتری
            </span>
            <p className="text-gray-700 mt-2">
              {getBuyerTypeInPersian(data?.buyer_type)}
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-10 mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">توضیحات</span>
            <p className="text-gray-700 mt-2">{data.description}</p>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-20">
          <DashboardButton
            inner_text="ویرایش اطلاعات"
            icon="/images/edit.svg"
            bg_color="bg-[#FF6500]"
            hover_state="hover:bg-[#FF6500] opacity-80"
            onClick={handleEditClick}
          />
          <DashboardButton
            inner_text="حذف اطلاعات"
            icon="/images/delete.svg"
            bg_color="bg-[#FF0000]"
            hover_state="hover:bg-[#FF0000]"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesOpportunitiesDetail;
