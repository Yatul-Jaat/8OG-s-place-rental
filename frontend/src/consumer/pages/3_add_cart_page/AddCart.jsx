import React from "react";
import Product from "../../components/Product/Product";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router";

const AddCart = () => {
  return (
    <div className="mb-15">
        <ul className=" flex justify-between items-center px-12 py-10 text-xl *:cursor-pointer">
            <li className=" flex items-center gap-1">
                <IoIosArrowBack />
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="underline">Edit</li>
        </ul>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  justify-start px-8 overflow-x-hidden ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
          return <Product />;
        })}
      </div>
    </div>
  );
};

export default AddCart;
