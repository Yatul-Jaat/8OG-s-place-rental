import React from "react";
import Product from "../../components/Product/Product";
import { useSelectContext } from "../../components/context/useSelectedContext";
import { NavLink } from "react-router";

const MainPage = () => {
  const {setIndex} =useSelectContext()
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  justify-start px-8 py-12 overflow-x-hidden ">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
        return <div  key={index} onClick={()=> setIndex(index)}>
          <Product  index={index} />
        </div>;
      })}
    </div>
  );
};

export default MainPage;
