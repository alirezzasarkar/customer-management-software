const DashboardTextarea = ({ label_text, placeholder_text }) => {
  return (
    <div className="flex flex-col sm:w-[30%]">
      <label className="text-[#153D8A] px-2">{label_text}</label>
      <textarea
        name=""
        id=""
        className="h-24 text-xs px-2 py-2 mt-2 rounded-lg"
        placeholder={placeholder_text}
      ></textarea>
    </div>
  );
};

export default DashboardTextarea;
