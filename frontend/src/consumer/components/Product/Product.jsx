import React, { useEffect, useState } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { NavLink } from "react-router";

const Product = ({ index }) => {
  let [addToCart, setAddToCart] = useState(false);


  return (
    <NavLink to={`/product`}>
      <div className="relative flex flex-col justify-center items-center gap-1 px-2 py-2 rounded-2xl   cursor-pointer min-w-[10rem] md:min-w-[12rem] lg:min-w-[15rem]">
        <img
          src="./experience.jpg"
          alt=""
          className=" bg-cover bg-center rounded-2xl"
        />
        <div className="flex flex-col self-start ">
          <p className="text-lg mb-[-5px]">name detail</p>
          <div className="text-xs flex gap-2 text-gray-600">
            <p>price</p>
            <p>rating</p>
          </div>
        </div>
        <p className="absolute top-4 left-3 px-2 py-1 bg-[rgba(255,255,255,0.7)] rounded-2xl text-xs font-semibold">
          guest favourite
        </p>
        <div
          className={`absolute top-4 right-4 text-[1.6rem] ${
            addToCart ? "text-pink-500" : "text-white"
          } hover:text-[1.7rem] transition-all duration-300 `}
        >
          <BsHeartFill />
        </div>
        <div
          onClick={() => setAddToCart(!addToCart)}
          className="absolute top-4 right-4 text-[1.6rem]  hover:text-[1.7rem] transition-all duration-300  "
        >
          <BsHeart className="text-[rgba(0,0,0,0.7.8)]" />
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
