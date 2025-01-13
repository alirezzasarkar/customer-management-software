import React from "react";
import ContractFile from "../Common/ContractFile";
import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashboardDropDown";
import DashboardDropDownCount from "../Common/DashboardDropDownCount";
import DashboardInputs from "../Common/DashboardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import Title from "../Common/Title";

const ContractEntry = ({
  formData,
  products,
  customers,
  onInputChange,
  onProductSelect,
  onCustomerSelect,
  selectedCustomer,
  selectedProducts,
  onFileChange,
  onSubmit,
  files,
  uploadMessage,
}) => {
  console.log(products);

  return (
    <div>
      <Title title="وارد کردن فاکتور" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <form
          className="flex flex-col gap-7"
          onSubmit={onSubmit}
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardDropDown
              label_text="نام و نام خانوادگی مشتری"
              items={customers}
              onSelect={onCustomerSelect}
              selectedItem={selectedCustomer}
            />
            <DashboardDropDownCount
              label_text="محصولات مورد نظر"
              items={products}
              onSelect={onProductSelect}
              selectedItems={selectedProducts}
            />
            <DashboardInputs
              lable_text="مبلغ فاکتور (ریال)"
              placeholder_text="مبلغ را وارد کنید"
              value={formData.price}
              onChange={(e) => onInputChange("price", e.target.value)}
              showInWords={true}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardTextarea
              label_text="شرایط فاکتور"
              placeholder_text="دوره گارانتی، خدمات پس از فروش و ..."
              value={formData.description}
              onChange={(e) => onInputChange("description", e.target.value)}
            />
            <ContractFile
              files={files}
              onFileChange={onFileChange}
              uploadMessage={uploadMessage}
            />
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <DashboardButton
              inner_text="ثبت فاکتور"
              icon="/images/Tick.svg"
              bg_color="bg-[#13A538]"
              button_type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContractEntry;
