import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router";
import { HandleSignup } from "../../../Hooks/ProviderSignup";

const LoginAdmin = () => {
  let [email, setEmail] = useState("");
  let [number, setNumber] = useState("");
  let [name, setName] = useState("");
  const { loading, SignUp } = HandleSignup();

  let handleSubmit = (e) => {
    if ((e.key = "Enter")) {
      e.preventDefault();
      if (!email) {
        SignUp(number, email, name);

        setEmail("");
        setName("");
        setNumber("");
      }
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center z-10 ">
      <div className=" bg-white flex flex-col justify-center items-center rounded-4xl border-1 border-gray-100 shadow-2xl">
        <div
          id="header"
          className=" flex justify-center items-center w-full relative border-b-1 border-gray-300 py-5"
        >
          <p className="text-[18px] font-semibold">Log in or sign up</p>
          <NavLink
            to="/"
            className="absolute text-xl left-5 font-semibold  h-6 w-6 rounded-full cursor-pointer"
          >
            <RxCross2 />
          </NavLink>
        </div>
        <form
          onSubmit={handleSubmit}
          id="main"
          className="flex flex-col justify-center items-center gap-5 mt-8 pb-10 mx-6 border-b-1 border-gray-300 font-medium"
        >
          <p className="text-2xl self-start ">
            Welcome to <i>8OG's</i>
          </p>
          <div className="flex flex-col gap-2">
            <div className="w-full py-3 flex justify-center px-3   rounded-lg border-1">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                className=" w-full h-full bg-white"
              />
            </div>
            <div className="w-full py-3 flex justify-center px-3   rounded-lg border-1">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="name"
                name="name"
                id="name"
                placeholder="Name..."
                className=" w-full h-full bg-white"
              />
            </div>
            <div className="w-full py-3 flex justify-center px-3   rounded-lg border-1">
              <input
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                type="number"
                name="number"
                id="number"
                placeholder="Mobile number"
                className=" w-full h-full bg-white"
              />
            </div>
            <p className="text-xs w-md">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.{" "}
              <strong className="underline cursor-pointer">
                Private Policy
              </strong>
            </p>
          </div>
          <button
            type="submit"
            className={`w-full bg-red-400 py-3 text-xl text-white rounded-xl ${
              loading ? "cursor-progress" : "cursor-pointer"
            } `}
          >
            Continue
          </button>
        </form>
        <p className="mt-[-1rem] mb-1 bg-white px-4 py-1">or</p>
        <div
          id="footer"
          className="pb-8 flex flex-col items-center justify-center"
        >
          <p>..........</p>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
