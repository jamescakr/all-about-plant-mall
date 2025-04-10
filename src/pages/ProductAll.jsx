import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:4000/products`;
    // let url = `https://my-json-server.typicode.com/jamescakr/all-about-plant-mall/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log("data?", data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>
        <ProductCard productList={productList} />
      </div>
    </div>
  );
};

export default ProductAll;
