import React from "react";
import Layout from "./../Components/Layout/Layout";
import CustomerListPage from "../Pages/CustomerListPage";

const DashboardRoutes = () => {
  return (
    <Layout>
      {/* <Routes> */}
      <CustomerListPage />
      {/* </Routes> */}
    </Layout>
  );
};

export default DashboardRoutes;
