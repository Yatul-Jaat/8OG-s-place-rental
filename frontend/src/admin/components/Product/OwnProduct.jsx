import React, { useEffect, useState } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { NavLink } from "react-router";

const OwnProduct = ({ index }) => {
  let [addToCart, setAddToCart] = useState(false);


  return (
    <NavLink to={`/admin/update`}>
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
      </div>
    </NavLink>
  );
};

export default OwnProduct;
