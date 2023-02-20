import React from "react";
import Thali from "../assets/Thali.jpeg";

const MenuCard = ({ menuData }) => {
  return (
    <>
      {menuData.map((data) => {
        return (
          <div
            className="p-4 text-white font-bold bg-purple-600 rounded-xl m2 w-auto"
            key={data.id}
          >
            <img className="w-64 h-auto rounded-lg" src={Thali} alt="" />
            <div className="mx-2 my-4 flex  justify-between">
              <h3>{data.itemName}</h3>
              <p>Price {data.price}</p>
            </div>
            <button className="bg-green-500 px-2 py-1 rounded-xl hover:bg-yellow-400 ">
              Add To Card
            </button>
          </div>
        );
      })}
    </>
  );
};

export default MenuCard;
