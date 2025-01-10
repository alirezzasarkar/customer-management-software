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
    profilePicture: null,
    password: "",
    confirmPassword: "",
  });

  const jobTitles = [
    { value: "admin", name: "مدیر مجموعه" },
    { value: "system_manager", name: "مدیر سامانه" },
    { value: "accountant", name: "حسابدار" },
    { value: "regular", name: "کاربر عادی" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleJobTitleChange = (job) => {
    setFormData((prevState) => ({
      ...prevState,
      jobTitle: job.value,
    }));
  };

  const handleProfilePictureUpload = (file) => {
    setFormData((prevState) => ({
      ...prevState,
      profilePicture: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "رمز عبور و تکرار آن مطابقت ندارند.",
      });
      return;
    }

    const formattedDate = formData.hireDate
      ? new Date(formData.hireDate).toISOString().split("T")[0]
      : "";

    const payload = {
      phone_number: formData.phoneNumber,
      full_name: formData.fullName,
      email: formData.email,
      password: formData.password,
      profile: {
        picture: formData.profilePicture ? formData.profilePicture.name : "",
        full_name: formData.fullName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        work_position: formData.jobTitle,
        department: formData.department,
        telegram_id: formData.telegramId,
        date_of_assignment: formattedDate || null,
      },
    };

    try {
      await addEmployees(payload);
      Swal.fire({
        icon: "success",
        title: "ثبت موفق!",
        text: "پروفایل کارمند با موفقیت ثبت شد.",
      });

      setFormData({
        fullName: "",
        jobTitle: "",
        department: "",
        email: "",
        phoneNumber: "",
        hireDate: "",
        telegramId: "",
        profilePicture: null,
        password: "",
        confirmPassword: "",
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
        jobTitles={jobTitles}
        onInputChange={handleInputChange}
        onJobTitleChange={handleJobTitleChange}
        onProfilePictureUpload={handleProfilePictureUpload}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EmployeeEntryPage;
