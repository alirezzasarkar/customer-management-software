import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./../Components/Layout/Layout";
import CampaignListPage from "./../Pages/CampaignListPage";
import ProductsListPage from "./../Pages/ProductsListPage";
import CustomerListPage from "./../Pages/CustomerListPage";
import EmployeeListPage from "./../Pages/EmployeeListPage";
import ContractListPage from "./../Pages/ContractListPage";
import NotificationListPage from "../Pages/NotificationListPage";
import SalesOpportunitiesListPage from "./../Pages/SalesOpportunitiesListPage";
import SalesOpportunitiesEntryPage from "./../Pages/SalesOpportunitiesEntryPage";
import CustomersEntry from "../Components/Customers/CustomersEntry";
import CampaignEntryPage from "../Pages/CampaignEntryPage";

const DashboardRoutes = () => {
  return (
    <Layout>
      <Routes>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        <Route
          path="/dashboard/sales-opportunities/entry"
          element={<SalesOpportunitiesEntryPage />}
        />

        <Route
          path="/dashboard/sales-opportunities/list"
          element={<SalesOpportunitiesListPage />}
        />

        <Route
          path="/dashboard/marketing/entry"
          element={<CampaignEntryPage />}
        />

        <Route
          path="/dashboard/marketing/list"
          element={<CampaignListPage />}
        />

        <Route
          path="/dashboard/invoice/entry"
          element={<ContractEntryPage />}
        />

        <Route path="/dashboard/invoice/list" element={<ContractListPage />} />

        {/* <Route path="/dashboard/employees/entry" element={<EmployeesEntry />} /> */}

        <Route
          path="/dashboard/employees/list"
          element={<EmployeeListPage />}
        />

        <Route path="/dashboard/customers/entry" element={<CustomersEntry />} />

        <Route
          path="/dashboard/customers/list"
          element={<CustomerListPage />}
        />

        {/* <Route
          path="/dashboard/notification/entry"
          element={<NotificationEntry />}
        /> */}

        <Route
          path="/dashboard/notification/list"
          element={<NotificationListPage />}
        />

        {/* <Route path="/dashboard/products/entry" element={<ProductsEntry />} /> */}

        <Route path="/dashboard/products/list" element={<ProductsListPage />} />
      </Routes>
    </Layout>
  );
};

export default DashboardRoutes;
