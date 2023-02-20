import React, { useState } from "react";
import MenuLi from "../data/MenuLi";
import MenuCard from "./MenuCard";

const HomePage = () => {
  const uniqueCategory = [
    ...new Set(
      MenuLi.map((data) => {
        return data.category;
      })
    ),
  ];

  const filterItem = (data) => {
    const updatedList = MenuLi.filter((e) => {
      return e.category === data;
    });
    setMenuData(updatedList);
  };

  console.log(uniqueCategory);

  const [menuData, setMenuData] = useState(MenuLi);
  console.log(menuData);

  return (
    <>
      <div className="w-full px-auto py-2 flex justify-center bg-purple-600 text-white">
        <h2 className="font-bold text-2xl"> Restaurant Menu Card </h2>
      </div>

      {/* Menu category items  */}
      <div className="flex flex-wrap pt-10 gap-4 justify-center font-bold text-xl italic">
        {uniqueCategory.map((data) => {
          return (
            <div
              className="bg-purple-600 p-3 rounded-l"
              onClick={() => filterItem(data)}
            >
              {" "}
              {data}{" "}
            </div>
          );
        })}
        <div
          className="bg-purple-600 p-2 rounded-l"
          onClick={() => setMenuData(MenuLi)}
        >
          
          All Items 
        </div>
      </div>

      <div className="flex flex-wrap justify-center mx-auto gap-3 mt-12  w-4/5 mb-16">
        <MenuCard menuData={menuData} />
      </div>

      <footer
        className="bg-black
             text-lg text-white text-center
             fixed
             inset-x-0
             bottom-0  
             p-1 mt-4"
      >
        <p>Design And Developed by <a href="https://www.linkedin.com/in/thenileshnj/" target="_blank" rel="noopener noreferrer"> Nilesh Nj </a> with ❤️ & 🧋</p>
      </footer>
    </>
  );
};

export default HomePage;
