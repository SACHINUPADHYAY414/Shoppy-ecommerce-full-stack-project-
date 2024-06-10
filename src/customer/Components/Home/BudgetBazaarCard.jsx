import React from 'react';
import { useNavigate } from "react-router-dom";

const BudgetBazaar = () => {
  const navigate = useNavigate();

  const products = [
    {
      image: "https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar2.jpg",
      title: "Product 1",
    },
    {
      image: "https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar2.jpg",
      title: "Product 2",
    },
    {
      image: "https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar3.jpg",
      title: "Product 3",
    },
    {
      image: "https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar4.jpg",
      title: "Product 4",
    },
    {
      image: "https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar5.jpg",
      title: "Product 5",
    },
  ];

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 ">
    <h2 className="text-2xl font-extrabold text-gray-900 py-5">Budget Bazaar </h2>
    <div className="flex flex-wrap justify-center border ">
      {products.map((product, index) => (
        <div
          key={index}
          onClick={() => navigate(`/women/clothing/top`)}
          className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[16rem] mx-3 my-4"
        >
          <div className="h-[13rem] w-full ">
            <img
              className="object-cover object-top w-full h-full"
              src={product.image}
              alt={product.title}
            />
          </div>

        </div>
      ))}
    </div>
    </div>
  );
};

export default BudgetBazaar;
