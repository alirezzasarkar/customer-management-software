const DashboardInputs = ({ lable_text, placeholder_text, isdisabled }) => {
  return (
    <div className="flex flex-col sm:w-[30%]">
      <label htmlFor="" className="text-[#153D8A] px-2">
        {lable_text}
      </label>
      <input
        type="text"
        className="rounded-lg h-10 placeholder:text-xs px-2 placeholder:opacity-70 mt-2"
        placeholder={placeholder_text}
        disabled={isdisabled}
      />
    </div>
  );
};

export default DashboardInputs;
