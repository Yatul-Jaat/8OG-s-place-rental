import React from "react";
import OwnProduct from "../../components/Product/OwnProduct";

const OwnProductList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  justify-start px-8 py-12 overflow-x-hidden ">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
        return <div  key={index}>
          <OwnProduct  index={index} />
        </div>;
      })}
    </div>
  );
};

export default OwnProductList;
