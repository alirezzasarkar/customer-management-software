import { Link } from "react-router-dom";

const SecondDashboardBox = ({
  summary,
  summary_detail,
  second_summary,
  second_summary_detail,
  title,
  DeatilPage,
}) => {
  return (
    <>
      <div className="bg-[#F1F1F9] md:w-[36.5%] p-7 rounded-xl flex flex-col gap-5">
        <h2 className="text-[#153D8A] font-bold text-xl">{title}</h2>
        <section className="flex justify-between bg-white rounded-lg h-10 items-center p-2 text-sm">
          <p className="text-[#0E295B]">{summary}</p>
          <p className="text-[#13A538]">{summary_detail}</p>
        </section>
        <section className="flex justify-between bg-white rounded-lg h-10 items-center p-2 text-sm">
          <p className="text-[#0E295B]">{second_summary}</p>
          <p className="text-[#13A538]">{second_summary_detail}</p>
        </section>
        <div className="flex justify-end">
          <button className="bg-[#13A538] hover:bg-[#59bb71]  text-white mt-3 rounded-xl h-9 text-sm px-4">
            <Link to={DeatilPage}> اطلاعات بیشتر</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondDashboardBox;
