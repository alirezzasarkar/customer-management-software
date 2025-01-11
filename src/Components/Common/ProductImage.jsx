import React, { useState } from "react";

const ProductImage = ({ upload_text, onUpload }) => {
  const [uploadMessage, setUploadMessage] = useState("");
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
      setUploadMessage("تصویر با موفقیت آپلود شد");
      setIsUploadSuccess(true);
    } else {
      setUploadMessage("آپلود فایل لغو یا ناموفق بود");
      setIsUploadSuccess(false);
    }
  };

  return (
    <div className="relative inline-flex flex-col text-xs gap-2 font-medium mt-2">
      <input
        type="file"
        id="file-upload"
        className="hidden"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file-upload"
        className="flex items-center justify-center w-32 h-32 rounded-md bg-white cursor-pointer"
      >
        <img src="/images/upload_cloud.svg" alt="" />
      </label>
      <p className="text-[#184375]">{upload_text}</p>
      {uploadMessage && (
        <p
          className={`text-sm mt-4 ${
            isUploadSuccess ? "text-green-600" : "text-red-500"
          }`}
        >
          {uploadMessage}
        </p>
      )}
    </div>
  );
};

export default ProductImage;
