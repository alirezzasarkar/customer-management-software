// import React from "react";
import Layout from "./../Components/Layout/Layout";
// import SalesOpportunitiesListPage from "../Pages/SalesOpportunitiesListPage";
import SalesOpportunitiesEntryPage from "../Pages/SalesOpportunitiesEntryPage";

const DashboardRoutes = () => {
  return (
    <Layout>
      {/* <Routes> */}
      <SalesOpportunitiesEntryPage />
      {/* </Routes> */}
    </Layout>
  );
};

export default DashboardRoutes;
