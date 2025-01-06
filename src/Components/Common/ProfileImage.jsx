// src/Common/ProfileImage.jsx

import React, { useState, useEffect } from "react";

const ProfileImage = ({ upload_text, onUpload, imageUrl }) => {
  const [preview, setPreview] = useState(imageUrl || "");

  useEffect(() => {
    setPreview(imageUrl || "");
  }, [imageUrl]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // ایجاد پیش‌نمایش تصویر
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // نمایش پیش‌نمایش تصویر
      };
      reader.readAsDataURL(file);

      // ارسال فایل به والد
      onUpload(file);
    }
  };

  return (
    <div className="relative inline-flex flex-col items-center text-xs gap-2 font-medium">
      {preview && (
        <img
          src={preview}
          alt="Profile Preview"
          className="w-[70px] h-[70px] rounded-full object-cover mb-2"
        />
      )}
      <div className="relative inline-flex items-center text-xs gap-2 font-medium">
        <input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor="file-upload"
          className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-gray-200 text-lg cursor-pointer"
        >
          <img src="/src/Assets/Icons/upload_cloud.svg" alt="Upload Icon" />
        </label>
        <p className="text-[#13A538]">{upload_text}</p>
      </div>
    </div>
  );
};

export default ProfileImage;
