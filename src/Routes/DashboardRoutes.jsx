import React from "react";
import Layout from "./../Components/Layout/Layout";
import ContractListPage from "../Pages/ContractListPage";
import AddContractPage from "../Pages/AddContractPage";

const DashboardRoutes = () => {
  return (
    <Layout>
      {/* <Routes> */}
      <ContractListPage />
      {/* </Routes> */}
    </Layout>
  );
};

export default DashboardRoutes;
