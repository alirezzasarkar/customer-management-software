import { Route, Routes } from "react-router-dom";

import CampaignEntryPage from "../Pages/CampaignEntryPage";
import CustomersEntryPage from "../Pages/CustomersEntryPage";
import DashboardPage from "../Pages/DashboardPage";
import NotificationEntryPage from "../Pages/NotificationEntryPage";
import NotificationListPage from "../Pages/NotificationListPage";
import ProductsEntryPage from "../Pages/ProductsEntryPage";
import ReportListEntryPage from "../Pages/ReportListEntryPage";
import ReportsDetailPage from "../Pages/ReportsDetailPage";
import ReportsListEditPage from "../Pages/ReportsListEditPage";
import ReportsListPage from "../Pages/ReportsListPage";
import TodosDetailPage from "../Pages/TodosDetailPage";
import TodosEditPage from "../Pages/TodosEditPage";
import TodosEntryPage from "../Pages/TodosEntryPage";
import TodosListPage from "../Pages/TodosListPage";
import Layout from "./../Components/Layout/Layout";
import CampaignDetailPage from "./../Pages/CampaignDetailPage";
import CampaignEditPage from "./../Pages/CampaignEditPage";
import CampaignListPage from "./../Pages/CampaignListPage";
import ContractDetailPage from "./../Pages/ContractDetailPage";
import ContractEditPage from "./../Pages/ContractEditPage";
import ContractEntryPage from "./../Pages/ContractEntryPage";
import ContractListPage from "./../Pages/ContractListPage";
import CustomerDetailPage from "./../Pages/CustomerDetailPage";
import CustomerListPage from "./../Pages/CustomerListPage";
import CustomersEditPage from "./../Pages/CustomersEditPage";
import EmployeeDetailPage from "./../Pages/EmployeeDetailPage";
import EmployeeEditPage from "./../Pages/EmployeeEditPage";
import EmployeeEntryPage from "./../Pages/EmployeeEntryPage";
import EmployeeListPage from "./../Pages/EmployeeListPage";
import NotificationDetailPage from "./../Pages/NotificationDetailPage";
import NotificationEditPage from "./../Pages/NotificationEditPage";
import ProductListEditPage from "./../Pages/ProductListEditPage";
import ProductsDetailPage from "./../Pages/ProductsDetailPage";
import ProductsListPage from "./../Pages/ProductsListPage";
import SalesOpportunitiesDetailPage from "./../Pages/SalesOpportunitiesDetailPage";
import SalesOpportunitiesEditPage from "./../Pages/SalesOpportunitiesEditPage";
import SalesOpportunitiesEntryPage from "./../Pages/SalesOpportunitiesEntryPage";
import SalesOpportunitiesListPage from "./../Pages/SalesOpportunitiesListPage";

const DashboardRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route
          path="/sales-opportunities/entry"
          element={<SalesOpportunitiesEntryPage />}
        />

        <Route
          path="/sales-opportunities/list"
          element={<SalesOpportunitiesListPage />}
        />

        <Route
          path="/sales-opportunities/detail/:id"
          element={<SalesOpportunitiesDetailPage />}
        />

        <Route
          path="/sales-opportunities/edit/:id"
          element={<SalesOpportunitiesEditPage />}
        />

        <Route path="/marketing/entry" element={<CampaignEntryPage />} />

        <Route path="/marketing/list" element={<CampaignListPage />} />

        <Route path="/marketing/detail/:id" element={<CampaignDetailPage />} />

        <Route path="/marketing/edit/:id" element={<CampaignEditPage />} />

        <Route path="/invoice/entry" element={<ContractEntryPage />} />

        <Route path="/invoice/list" element={<ContractListPage />} />

        <Route path="/invoice/detail/:id" element={<ContractDetailPage />} />

        <Route path="/invoice/edit/:id" element={<ContractEditPage />} />

        <Route path="/employees/entry" element={<EmployeeEntryPage />} />

        <Route path="/employees/list" element={<EmployeeListPage />} />

        <Route path="/employees/detail/:id" element={<EmployeeDetailPage />} />

        <Route path="/employees/edit/:id" element={<EmployeeEditPage />} />

        <Route path="/customers/entry" element={<CustomersEntryPage />} />

        <Route path="/customers/list" element={<CustomerListPage />} />

        <Route path="/customers/detail/:id" element={<CustomerDetailPage />} />

        <Route path="/customers/edit/:id" element={<CustomersEditPage />} />

        <Route path="/notification/entry" element={<NotificationEntryPage />} />

        <Route path="/notification/list" element={<NotificationListPage />} />

        <Route
          path="/notification/detail/:id"
          element={<NotificationDetailPage />}
        />

        <Route
          path="/notification/edit/:id"
          element={<NotificationEditPage />}
        />

        <Route path="/products/entry" element={<ProductsEntryPage />} />

        <Route path="/products/list" element={<ProductsListPage />} />

        <Route path="/products/detail/:id" element={<ProductsDetailPage />} />

        <Route path="/products/edit/:id" element={<ProductListEditPage />} />

        <Route path="/reports/entry" element={<ReportListEntryPage />} />
        <Route path="/reports/list" element={<ReportsListPage />} />
        <Route path="/reports/detail/:id" element={<ReportsDetailPage />} />
        <Route path="/reports/edit/:id" element={<ReportsListEditPage />} />

        <Route path="/todos/entry" element={<TodosEntryPage />} />
        <Route path="/todos/list" element={<TodosListPage />} />
        <Route path="/todos/detail/:id" element={<TodosDetailPage />} />
        <Route path="/todos/edit/:id" element={<TodosEditPage />} />
      </Routes>
    </Layout>
  );
};

export default DashboardRoutes;
