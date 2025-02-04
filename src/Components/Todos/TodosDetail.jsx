import { useNavigate } from "react-router-dom";
import DashboardButton from "../Common/DashboardButton";
import Title from "../Common/Title";

const TodosDetail = ({ data, onDelete }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/dashboard/todos/edit/${data.id}`);
  };
  return (
    <>
      <Title title="نمایش جزئیات وظایف ها" />
      <div className="bg-gray-100 sm:p-10 p-5 sm:mx-6 rounded-md">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 mb-8">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام کارمند
            </span>
            <p className="text-gray-700 mt-2">{}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">آدرس </span>
            <p className="text-gray-700 mt-2">{}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              تاریخ ارسال{" "}
            </span>
            <p className="text-gray-700 mt-2">{}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-blue-800 font-semibold">توضیحات </span>
          <p className="text-gray-700 mt-2">{}</p>
        </div>
        <div className="flex justify-center gap-5 mt-8 mb-2">
          <DashboardButton
            inner_text="ویرایش وظایف"
            icon="/images/edit.svg"
            bg_color="bg-[#FF6500]"
            hover_state="hover:bg-[#FF6500] opacity-80"
            onClick={handleEditClick}
          />
          <DashboardButton
            inner_text="حذف وظایف"
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

export default TodosDetail;
