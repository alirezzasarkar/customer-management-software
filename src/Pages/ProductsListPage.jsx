import React, { useState } from "react";
import ProductsList from "../Components/Products/ProductsList";

const initialData = [
  {
    id: 1,
    productName: "گوشی موبایل",
    productPrice: "۷۵۰۰۰۰۰",
    category: "الکترونیک",
  },
  {
    id: 2,
    productName: "لپ‌تاپ",
    productPrice: "۲۵۰۰۰۰۰۰",
    category: "کامپیوتر",
  },
  {
    id: 3,
    productName: "تلویزیون",
    productPrice: "۱۸۰۰۰۰۰۰",
    category: "الکترونیک",
  },
  {
    id: 4,
    productName: "ماشین لباسشویی",
    productPrice: "۱۴۰۰۰۰۰۰",
    category: "لوازم خانگی",
  },
  {
    id: 5,
    productName: "یخچال",
    productPrice: "۲۲۰۰۰۰۰۰",
    category: "لوازم خانگی",
  },
  {
    id: 6,
    productName: "تبلت",
    productPrice: "۵۰۰۰۰۰۰",
    category: "الکترونیک",
  },
  {
    id: 7,
    productName: "دوربین دیجیتال",
    productPrice: "۷۰۰۰۰۰۰",
    category: "دوربین و عکاسی",
  },
  {
    id: 8,
    productName: "چاپگر",
    productPrice: "۴۰۰۰۰۰۰",
    category: "کامپیوتر",
  },
];

const columns = [
  { id: "productName", label: "نام محصول" },
  { id: "productPrice", label: "قیمت محصول" },
  { id: "category", label: "دسته بندی" },
];

const ProductsListPage = () => {
  const [data, setData] = useState(initialData);
  return <ProductsList data={data} columns={columns} />;
};

export default ProductsListPage;
