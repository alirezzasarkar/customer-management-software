// src/Components/Common/ContractFile.jsx

import React from "react";

const ContractFile = ({ onFileChange, uploadMessage, files }) => {
  const handleFileSelect = (e) => {
    const filesArray = Array.from(e.target.files);
    onFileChange(filesArray);
  };

  return (
    <div className="w-[30%] mt-8">
      <div className="border-2 border-dashed border-[#153D8A] rounded-lg p-4 flex items-center bg-gray-100 h-12">
        <label
          htmlFor="fileUpload"
          className="text-[#4161A0] cursor-pointer font-medium text-sm flex items-center justify-between w-full"
        >
          <span className="flex flex-row-reverse items-center gap-2">
            فایل فاکتور را آپلود کنید
            <span>
              <img
                src="/src/Assets/Icons/upload_folder.svg"
                alt="Upload Folder"
                className="w-5 h-5"
              />
            </span>
          </span>
          <span className="mr-2 text-sm bg-white py-1 px-2 rounded-md">
            آپلود فایل
          </span>
        </label>
        <input
          type="file"
          id="fileUpload"
          className="hidden"
          multiple
          onChange={handleFileSelect}
        />
      </div>

      {uploadMessage && (
        <div className="mt-2 text-green-500 text-sm">{uploadMessage}</div>
      )}

      {files && files.length > 0 && (
        <div className="mt-2 text-gray-700 text-sm">
          <strong>فایل‌های انتخاب شده:</strong>
          <ul className="list-disc list-inside">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContractFile;
