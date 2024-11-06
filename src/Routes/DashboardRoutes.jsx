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
import ContractEntryPage from './../Pages/ContractEntryPage';
import NotificationEntryPage from "../Pages/NotificationEntryPage";
import EmployeeEntryPage from './../Pages/EmployeeEntryPage';
import ProductsEntryPage from "../Pages/ProductsEntryPage";
import SalesOpportunitiesDetailPage from './../Pages/SalesOpportunitiesDetailPage';
import CampaignDetailPage from './../Pages/CampaignDetailPage';
import ContractDetailPage from './../Pages/ContractDetailPage';
import EmployeeDetailPage from './../Pages/EmployeeDetailPage';
import CustomerDetailPage from './../Pages/CustomerDetailPage';
import NotificationDetailPage from './../Pages/NotificationDetailPage';
import ProductsDetailPage from './../Pages/ProductsDetailPage';

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
          path="/dashboard/sales-opportunities/detail/:id"
          element={<SalesOpportunitiesDetailPage />}
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
          path="/dashboard/marketing/detail/:id"
          element={<CampaignDetailPage />}
        />

        <Route
          path="/dashboard/invoice/entry"
          element={<ContractEntryPage />}
        />

        <Route path="/dashboard/invoice/list" element={<ContractListPage />} />

        <Route path="/dashboard/invoice/detail/:id" element={<ContractDetailPage />} />

        <Route
          path="/dashboard/employees/entry"
          element={<EmployeeEntryPage />}
        />

        <Route
          path="/dashboard/employees/list"
          element={<EmployeeListPage />}
        />

        <Route
          path="/dashboard/employees/detail/:id"
          element={<EmployeeDetailPage />}
        />

        <Route path="/dashboard/customers/entry" element={<CustomersEntry />} />

        <Route
          path="/dashboard/customers/list"
          element={<CustomerListPage />}
        />

        <Route
          path="/dashboard/customers/detail/:id"
          element={<CustomerDetailPage />}
        />

        <Route
          path="/dashboard/notification/entry"
          element={<NotificationEntryPage />}
        />

        <Route
          path="/dashboard/notification/list"
          element={<NotificationListPage />}
        />

        <Route
          path="/dashboard/notification/detail/:id"
          element={<NotificationDetailPage />}
        />

        <Route
          path="/dashboard/products/entry"
          element={<ProductsEntryPage />}
        />

        <Route path="/dashboard/products/list" element={<ProductsListPage />} />

        <Route path="/dashboard/products/detail/:id" element={<ProductsDetailPage />} />

      </Routes>
    </Layout>
  );
};

export default DashboardRoutes;
