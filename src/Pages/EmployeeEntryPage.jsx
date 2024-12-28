import { useState } from "react";
import Swal from "sweetalert2";
import EmployeeEntry from "../Components/Employees/EmployeeEntry";
import { addEmployees } from "../Services/APIs/Employees";

const EmployeeEntryPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    department: "",
    email: "",
    phoneNumber: "",
    hireDate: "",
    telegramId: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = formData.hireDate
      ? new Date(formData.hireDate).toISOString().split("T")[0] // Correct field used here
      : "";

    const payload = {
      full_name: formData.fullName,
      job_title: formData.jobTitle,
      department: formData.department,
      email: formData.email,
      phone_number: formData.phoneNumber,
      hire_date: formattedDate,
      telegram_id: formData.telegramId,
    };

    try {
      await addEmployees(payload);
      Swal.fire({
        icon: "success",
        title: "ثبت موفق!",
        text: "پروفایل کارمند با موفقیت ثبت شد.",
      });
    } catch (error) {
      console.error("Error submitting employee profile:", error);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "مشکلی در ثبت پروفایل کارمند وجود داشت.",
      });
    }
  };

  return (
    <div>
      <EmployeeEntry
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EmployeeEntryPage;
