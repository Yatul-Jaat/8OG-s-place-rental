import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
  let [searchProduct, setSearchProduct] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    if (searchProduct) {
      if ((e.key = "Enter")) {
        console.log(searchProduct);
        setSearchProduct("");
      }
    }
  };
  


  return (
    <form
      onSubmit={handleSubmit}
      className="w-[80%] md:w-[100%] flex items-center rounded-full border-1 py-1 px-2"
    >
      <div className="w-full py-3 flex justify-center px-3   ">
        <input
          onChange={(e) => setSearchProduct(e.target.value)}
          value={searchProduct}
          type="text"
          name="search"
          id="search"
          placeholder="Search place..."
          className=" w-full h-full bg-white"
        />
      </div>
      <button
        type="submit"
        className="text-2xl h-10 w-10 rounded-full flex items-center px-2 bg-red-400 text-white cursor-pointer"
      >
        <IoIosSearch />
      </button>
    </form>
  );
};

export default Searchbar;
