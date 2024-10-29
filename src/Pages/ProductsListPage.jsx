import React, { useState } from "react";
import ProductsList from "../Components/Products/ProductsList";

const initialData = [
  {
    id: 1,
    product_name: "گوشی موبایل",
    price: "۷۵۰۰۰۰۰",
    category: "الکترونیک",
  },
  {
    id: 2,
    product_name: "لپ‌تاپ",
    price: "۲۵۰۰۰۰۰۰",
    category: "کامپیوتر",
  },
  {
    id: 3,
    product_name: "تلویزیون",
    price: "۱۸۰۰۰۰۰۰",
    category: "الکترونیک",
  },
  {
    id: 4,
    product_name: "ماشین لباسشویی",
    price: "۱۴۰۰۰۰۰۰",
    category: "لوازم خانگی",
  },
  {
    id: 5,
    product_name: "یخچال",
    price: "۲۲۰۰۰۰۰۰",
    category: "لوازم خانگی",
  },
  {
    id: 6,
    product_name: "تبلت",
    price: "۵۰۰۰۰۰۰",
    category: "الکترونیک",
  },
  {
    id: 7,
    product_name: "دوربین دیجیتال",
    price: "۷۰۰۰۰۰۰",
    category: "دوربین و عکاسی",
  },
  {
    id: 8,
    product_name: "چاپگر",
    price: "۴۰۰۰۰۰۰",
    category: "کامپیوتر",
  },
];

const columns = [
  { id: "product_name", label: "نام محصول" },
  { id: "price", label: "قیمت محصول" },
  { id: "category", label: "دسته بندی" },
];

const ProductsListPage = () => {
  const [data, setData] = useState(initialData);
  return <ProductsList data={data} columns={columns} />;
};

export default ProductsListPage;
