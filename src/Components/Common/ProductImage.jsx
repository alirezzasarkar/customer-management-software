// Components/Common/ProductImage.jsx

import React, { useState, useEffect } from "react";

const ProductImage = ({ upload_text, onUpload, image }) => {
  const [uploadMessage, setUploadMessage] = useState("");
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (image && image instanceof File) {
      const objectUrl = URL.createObjectURL(image);
      setPreviewUrl(objectUrl);
      console.log("Object URL:", objectUrl); // برای بررسی

      // آزادسازی URL پس از استفاده
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewUrl(null);
    }
  }, [image]);

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
        accept="image/*"
      />
      <label
        htmlFor="file-upload"
        className="flex items-center justify-center w-32 h-32 rounded-md bg-white cursor-pointer overflow-hidden"
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Product"
            className="object-cover w-full h-full rounded-md"
          />
        ) : (
          <img src="/images/upload_cloud.svg" alt="Upload" />
        )}
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
