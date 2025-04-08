import React from "react";

const ProductCard = ({ productList }) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          {productList.map((item, index) => (
            <div className="">
              <img key={index} src={item.img} className="w-70 h-80" />
              <div className="text-lg font-semibold">{item.title}</div>
              <div>{item.price}</div>
              <div>{item.light}</div>
              <div>💧 {item.watering}</div>
              <div>🪴 {item.suitability}</div>
            </div>
          ))}
          <div>price</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
