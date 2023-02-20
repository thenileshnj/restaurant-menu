import React from "react";
import Thali from "../assets/Thali.jpeg";


const MenuCard = ({ menuData }) => {
  return (
    <>
      {menuData.map((data) => {
        return (
          <div className="p-4 bg-purple-600 rounded-xl m2 w-auto" key={data.id}>
            <img className="w-64 h-auto rounded-lg" src={Thali} alt="" />
            <h3>{data.itemName}</h3>
            <p>Price {data.price}</p>
            <button className="bg-white px-2 py-1 rounded-xl hover:bg-yellow-400 to-orange-600">
              Add To Card
            </button>
          </div>
        );
      })}
    </>
  );
};

export default MenuCard;
