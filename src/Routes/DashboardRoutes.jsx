import React from "react";
import Layout from "./../Components/Layout/Layout";
import CampaignListPage from "../Pages/CampaignListPage";

const DashboardRoutes = () => {
  return (
    <Layout>
      {/* <Routes> */}
      <CampaignListPage />
      {/* </Routes> */}
    </Layout>
  );
};

export default DashboardRoutes;
