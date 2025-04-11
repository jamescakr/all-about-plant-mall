import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import mainBg from "../assets/mainBg.webp";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("QQQ", searchQuery);
    // let url = `http://localhost:4000/products?q=${searchQuery}`;
    let url = `https://my-json-server.typicode.com/jamescakr/all-about-plant-mall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log("data?", data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <div className="mt-15 mb-20 hidden sm:block">
        <img src={mainBg} className="w-screen" />
      </div>
      <div>
        <ProductCard productList={productList} />
      </div>
    </div>
  );
};

export default ProductAll;
