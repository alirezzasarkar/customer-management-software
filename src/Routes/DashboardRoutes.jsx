import React from "react";
import Layout from "./../Components/Layout/Layout";
import SalesOpportunitiesListPage from "../Pages/SalesOpportunitiesListPage";

const DashboardRoutes = () => {
  return (
    <Layout>
      {/* <Routes> */}
      <SalesOpportunitiesListPage />
      {/* </Routes> */}
    </Layout>
  );
};

export default DashboardRoutes;
