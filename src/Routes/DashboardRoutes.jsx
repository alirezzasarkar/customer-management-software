import React from "react";
import Layout from "./../Components/Layout/Layout";
import ProductsListPage from "../Pages/ProductsListPage";

const DashboardRoutes = () => {
  return (
    <Layout>
      {/* <Routes> */}
      <ProductsListPage />
      {/* </Routes> */}
    </Layout>
  );
};

export default DashboardRoutes;
