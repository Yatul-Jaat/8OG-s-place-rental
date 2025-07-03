import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Searchbar from "../../pages/5_search_setup/Searchbar";
import { NavLink } from "react-router";

const Navbar = () => {
  let [hamburger, setHamburger] = useState(false);

  let handleBurgerClick = (e) => {
    e.preventDefault();
    setHamburger(!hamburger);
  };

  return (
    <div className="py-6 flex flex-col gap-2 border-b-1 border-[rgba(0,0,0,0.3)] bg-white ">
      <div className="relative flex justify-between  px-15  ">
        <NavLink to="/" id="logo" className="text-[2rem] font-medium  ">
          8OG's
        </NavLink>
        <div className=" hidden md:flex justify-center w-[40%]">
          <Searchbar />
        </div>
        <div
          id="navStuff"
          className="flex gap-5 items-center font-medium *:cursor-pointer *:rounded-full  *:py-2"
        >
          <NavLink to="/admin" className="px-4 hover:bg-gray-100">Become a host</NavLink>
          <div onClick={handleBurgerClick} className="px-2 bg-gray-100">
            <RxHamburgerMenu className="text-xl h-6 w-6 " />
          </div>
        </div>
        <ul
          className={`absolute right-[5rem] top-[100%] z-10 bg-white w-3xs ${
            hamburger ? "flex" : "hidden"
          } flex-col justify-center items-center gap-3 shadow-xl/20  py-4 rounded-xl border-1 border-gray-100 text-md *:w-full *:py-1 *:px-6 `}
        >
          <li
            onClick={handleBurgerClick}
            className="cursor-pointer hover:bg-gray-100"
          >
            <NavLink to="/cart">Cart List</NavLink>
          </li>
          <hr className="text-gray-200 " />
          <li
            onClick={handleBurgerClick}
            className="cursor-pointer hover:bg-gray-100"
          >
            <NavLink to="/admin/login">
              <p className="text-md">Become a host</p>
              <p className="text-xs text-gray-600">
                It's easy to start hosting and earn extra income.
              </p>
            </NavLink>
          </li>
          <hr className="text-gray-200" />
          <li
            onClick={handleBurgerClick}
            className="cursor-pointer hover:bg-gray-100 flex "
          >
            <NavLink to="/login" className=" w-full">
              log in or sign up
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full flex items-center justify-center md:hidden ">
        <Searchbar />
      </div>
    </div>
  );
};

export default Navbar;
