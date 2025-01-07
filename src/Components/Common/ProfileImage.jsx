// ProfileImage.jsx
import React, { useState, useEffect } from "react";

const ProfileImage = ({ upload_text, onUpload, imageUrl }) => {
  const [preview, setPreview] = useState(imageUrl || "");
  const [uploadMessage, setUploadMessage] = useState("");
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);

  useEffect(() => {
    setPreview(imageUrl || "");
  }, [imageUrl]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      onUpload(file);
      setUploadMessage("تصویر با موفقیت انتخاب شد");
      setIsUploadSuccess(true);
    } else {
      setUploadMessage("آپلود تصویر ناموفق بود");
      setIsUploadSuccess(false);
    }
  };

  return (
    <div className="relative inline-flex flex-col items-center text-xs gap-2 font-medium">
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
      {uploadMessage && (
        <p
          className={`text-sm mt-1 ${
            isUploadSuccess ? "text-green-600" : "text-red-500"
          }`}
        >
          {uploadMessage}
        </p>
      )}
    </div>
  );
};

export default ProfileImage;
