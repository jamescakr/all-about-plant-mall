import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Minus, Plus } from "lucide-react";

//have to change local URL to json-server (ProductAll.jsx)
const ProductDetail = () => {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [count, setCount] = useState(1);

  const getProductDetail = async () => {
    // let url = `http://localhost:4000/products/${id}`;
    let url = `https://my-json-server.typicode.com/jamescakr/all-about-plant-mall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductDetail(data);
    console.log("data?", data);
  };

  const handleIncrement = () => {
    setCount((prev) =>
      prev === productDetail.stock ? productDetail.stock : prev + 1
    );
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : prev));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:mt-20 px-2 md:px-20 lg:px-30 h-auto">
        {}
        <div className="lg:col-span-2">
          <img
            src={productDetail?.img}
            alt={productDetail?.title}
            className="rounded-md"
          />
        </div>
        <div className="lg:col-span-3 ml-5 mr-3">
          <div className="text-4xl font-semibold pt-5">{productDetail?.title}</div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-2xl">{productDetail?.price}</div>
            {/* 태그 3가지 */}
            <div className="flex gap-x-1 text-sm">
              <div className="bg-emerald-700 text-white rounded-full w-auto p-1 px-3">
                🪴 {productDetail?.suitability}
              </div>
              <div className="bg-emerald-700 text-white rounded-full w-auto p-1 px-3">
                {productDetail?.light}
              </div>
              <div className="bg-emerald-700 text-white rounded-full w-auto p-1 px-3">
                💧 {productDetail?.watering}
              </div>
            </div>
          </div>
          {/* <div className="ml-5">(review)</div> */}
          <div className="mt-6">
            Members can return in-store for credit
            <button className="cursor-pointer underline ml-3">Join Now</button>
          </div>

          {/* counter button */}
          <div className="flex items-center gap-x-5 mt-8">
            <button
              className="bg-gray-200 w-10 h-10 flex justify-center items-center hover:bg-gray-300"
              onClick={handleDecrement}
            >
              <Minus className="w-5" />
            </button>
            <span className="font-bold">{count}</span>
            <button
              className="bg-gray-200 w-10 h-10 flex justify-center items-center hover:bg-gray-300"
              onClick={handleIncrement}
            >
              <Plus className="w-5" />
            </button>
          </div>

          {/* showing stock */}
          <div className="text-lg font-light italic text-red-800 mt-5">
            {productDetail?.stock < 6 ? (
              <div>Only {productDetail?.stock} remaining</div>
            ) : (
              ""
            )}
          </div>

          {/* delivery option */}
          <div>
            <div className="flex mt-10">
              <div className="font-semibold mr-5">How to get it</div>
              <div className="text-red-800">Required</div>
            </div>
            {/* checked button */}
            <div>
              <div className="flex justify-between mt-5">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryOption"
                    value="local"
                    className="w-5 h-5 mr-2"
                  />
                  <span>Local delivery</span>
                </div>
                <button className="underline cursor-pointer">
                  Check your address
                </button>
              </div>
              <div className="border-b border-gray-300 mt-5"></div>
              <div>
                <div className="flex mt-5">
                  <input
                    type="radio"
                    name="deliveryOption"
                    value="store"
                    className="w-5 h-5 mr-2"
                  />
                  <div>Store pickup</div>
                </div>
                <div>All About Plant INC</div>
                <div>1023 Coach Hill Rd SW, Calgary, AB</div>
              </div>
            </div>
          </div>

          {/* cart button*/}
          <button className="bg-emerald-700 rounded-sm text-white font-semibold w-full h-14 mt-20 mb-20 cursor-pointer">
            ADD TO CART
            <span className="text-gray-300 ml-3">{productDetail?.price}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
