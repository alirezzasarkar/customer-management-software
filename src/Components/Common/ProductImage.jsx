const ProductImage = ({ upload_text }) => {
  return (
    <div className="relative inline-flex items-center text-xs gap-2 font-medium mt-2">
      <input type="file" id="file-upload" className="hidden" />
      <label
        htmlFor="file-upload"
        className="flex items-center justify-center w-32 h-32 rounded-md  text-white bg-white text-lg cursor-pointer"
      >
        <img src="/src/Assets/Icons/upload_cloud.svg" alt="" />
      </label>
      <p className="text-[#13A538]">{upload_text}</p>
    </div>
  );
};

export default ProductImage;
