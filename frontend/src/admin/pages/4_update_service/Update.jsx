import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { NavLink } from "react-router";

const SelectedProduct = () => {
  return (
    <div className="px-20">
      <div className="flex flex-col py-10 gap-6 lg:pb-20 ">
        <div className="flex flex-col lg:flex-row justify-between lg:px-20">
            <p className=" text-xl sm:text-2xl lg:text-3xl ">
          Luxury Private Stay Near Temples & Ghats
        </p>
        <p className="text-xl hover:underline transition-all duration-300 cursor-pointer self-end">Edit</p>
        </div>
        <div className="flex flex-col  justify-center lg:flex-row lg:justify-around gap-10">
          <div className="w-[80%] lg:w-[40%] h-full flex items-center justify-center ">
            <img src="service.jpg" alt="img" />
          </div>
          <div className="pt-10 flex flex-col gap-4 w-full lg:w-[40%]">
            <p className="text-2xl font-medium">
              Entire apartment in Varanasi, India
            </p>
            <div className="flex lg:w-md items-center  px-2 py-3 ">
              <div className="flex flex-col items-center justify-center">
                <strong>4.5</strong>
                <div className="flex items-center gap-[1px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </div>
              </div>
            </div>
            <p className="lg:w-md border-b-1 border-[rgba(0,0,0,0.3)] pb-4 text-base/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              assumenda quod eius laborum consequuntur voluptatem aperiam
              numquam! Repellat repudiandae, id, voluptatem, placeat ad nisi
              magni voluptatibus laborum ipsam deserunt perferendis!
            </p>
            <div className="lg:w-md flex justify-between items-center px-4 py-3 text-xl ">
              <p className="font-medium">$ 3000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
