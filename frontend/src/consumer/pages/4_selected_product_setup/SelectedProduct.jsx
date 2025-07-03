import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { RiFindReplaceLine } from "react-icons/ri";

import Product from "../../components/Product/Product";
import { NavLink } from "react-router";

const SelectedProduct = () => {
  return (
    <div className="px-20">
      <div className="flex flex-col py-10 gap-6 lg:pb-20 border-b-1 border-[rgba(0,0,0,0.3)]">
        <p className=" text-xl sm:text-2xl lg:text-3xl lg:px-20">
            Luxury Private Stay Near Temples & Ghats
          </p>
        <div className="flex flex-col  justify-center lg:flex-row lg:justify-around gap-10">
          <div className="w-[80%] lg:w-[40%] h-full flex items-center justify-center ">
            <img src="experience.jpg" alt="img" />
          </div>
          <div className="pt-10 flex flex-col gap-4 w-full lg:w-[40%]">
            <p className="text-2xl font-medium">
              Entire apartment in Varanasi, India
            </p>
            <div className="flex lg:w-md items-center justify-around px-2 py-3 gap-1 border-1 rounded-2xl border-[rgba(0,0,0,0.3)]">
              <p className="w-2xs text-[14px] text-base/5 font-medium ">
                This home is in the top 1% of eligible listings based on
                ratings, reviews and reliability
              </p>
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
              <NavLink to="/billing" className="px-3 py-1 rounded-2xl bg-red-400 text-white cursor-pointer">
                Reserve
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-15 ">
        <div className="text-3xl font-medium  flex gap-3 items-center mb-4">
          <RiFindReplaceLine />
          <p>Related Places</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  justify-start overflow-x-hidden ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
            return <Product key={index} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
