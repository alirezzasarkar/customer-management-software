import { useState } from "react";
import Loading from "../Components/Common/Loading";
import TodosList from "../Components/Todos/TodosList";

const columns = [{ id: "send_date", label: "تاریخ ارسال" }];

const TodosListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return <>{loading ? Loading : <TodosList columns={columns} data={data} />}</>;
};

export default TodosListPage;
