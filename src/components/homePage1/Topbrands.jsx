import React from "react";
import { IoIosColorFilter } from "react-icons/io";
import { specialPrice, top_Brands } from "/src/context";

const Topbrands = () => {
  return (
    <div className="mx-8">
      <div className="text-2xl my-8 font-semibold">🏆 Top Brands</div>

      <div className="flex flex-wrap items-start gap-4">
        {/* Map over the top_Brands array and render each item */}
        {top_Brands.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-col justify-between items-center"
          >
            <img src={brand.image} className="w-[255px]" alt={brand.title} />
            <div>{brand.title}</div>
            <div className="border border-orange-500 w-20 my-1" />
            <div>{brand.content}</div>
          </div>
        ))}
      </div>

      <div>
        <div className="text-2xl my-8 font-semibold">⚡️ Specials By Price</div>
        <div className="flex items-start gap-14">
          {/* Map over the specialPrice array and render each item */}
          {specialPrice.map((price) => (
            <div
              key={price.id}
              className="inline-flex flex-between items-center px-3 bg-orange-200 p-2 w-[290px] h-[70px] rounded-lg"
            >
              <div className="flex flex-start items-center">
                <div className="font-bold text-3xl">
                  Rs {price.title}{" "}
                  <span className="text-gray-400 text-2xl">& Under</span>
                </div>
              </div>
              <div className="flex justify-end items-center pl-8 text-2xl">
                <IoIosColorFilter />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbrands;

{
  /* <img
          src="src/assets/topBrands/allDayMuseli.png"
          className="w-[190px]"
        /> */
}
