import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ productList }) => {
  const navigate = useNavigate();
  const goInDetail = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div>
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20 sm:mt-10 justify-items-center">
          {productList.map((item, index) => (
            <div key={index} className="text-xl" onClick={() => goInDetail(item.id)}>
              <img
                src={item?.img}
                alt={item?.title}
                className="w-90 sm:w-[250px] h-90 sm:h-70 rounded-lg mb-2 origin-bottom hover:scale-110 transition duration-200 cursor-pointer"
              />
              <div className="flex justify-between items-center mb-2">
                <div className="text-2xl font-semibold ml-2 text-green-800">
                  {item?.title}
                </div>
                <div className="bg-green-400 rounded-md w-auto p-1">
                  {item?.price}
                </div>
              </div>

              <div className="ml-2">{item?.light}</div>
              <div className="ml-2">💧 {item?.watering}</div>
              <div className="ml-2">🪴 {item?.suitability}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
