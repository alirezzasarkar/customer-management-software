const DashboardBox = ({ title, summary, summary_detail }) => {
  return (
    <>
      <div className="bg-[#F1F1F9] p-7 rounded-xl flex flex-col gap-4">
        <h2 className="text-[#153D8A] font-bold text-xl">{title}</h2>
        <section className="flex justify-between bg-white rounded-xl h-10 items-center p-2 text-sm">
          <p className="text-[#0E295B]">{summary}</p>
          <p className="text-[#13A538]">{summary_detail}</p>
        </section>
        <div className="flex justify-end">
          <button className="bg-[#13A538] hover:bg-[#59bb71]  text-white mt-2 rounded-xl h-9 text-sm px-4">
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardBox;
