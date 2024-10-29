import React from "react";
import Layout from "./../Components/Layout/Layout";
import EmployeeListPage from "../Pages/EmployeeListPage";

const DashboardRoutes = () => {
  return (
    <Layout>
      {/* <Routes> */}
      <EmployeeListPage />
      {/* </Routes> */}
    </Layout>
  );
};

export default DashboardRoutes;
