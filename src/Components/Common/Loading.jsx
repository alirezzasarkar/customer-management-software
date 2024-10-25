import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <ClipLoader color="#3498db" size={50} />
    </div>
  );
};

export default Loading;
