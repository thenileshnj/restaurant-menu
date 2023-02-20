import React from "react";
import biryani from "../assets/biryani.jpg";

const MenuCard = ({ menuData }) => {
  return (
    <>
      {menuData.map((data) => {
        return (
          <div className="p-4 bg-purple-600 rounded-xl m2 w-auto" key={data.id}>
            <img className="w-64 h-auto rounded-lg" src={biryani} alt="" />
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
