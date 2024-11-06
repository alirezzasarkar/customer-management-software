const ContractFile = () => {
  return (
    <div className="w-[30%] mt-8">
      <div className="border-2 border-dashed border-[#153D8A] rounded-lg p-4 flex items-center  bg-gray-100 h-12 ">
        <label
          htmlFor="fileUpload"
          className="text-[#4161A0] cursor-pointer font-medium text-sm flex items-center justify-between w-full"
        >
          <span className="flex flex-row-reverse items-center gap-2">
            فایل فاکتور را اپلود کنید{" "}
            <span>
              <img
                src="/src/Assets/Icons/upload_folder.svg"
                alt=""
                className="w-5 h-5"
              />
            </span>
          </span>

          <span className="mr-2 text-sm bg-white py-1 px-2 rounded-md">
            اپلود فایل
          </span>
        </label>
        <input type="file" id="fileUpload" className="hidden" />
      </div>
    </div>
  );
};

export default ContractFile;
