import React from "react";
import { saraFood } from "/src/context";

const Sara = () => {
  return (
    <section className="flex flex-col mx-8 ">
      <div className="text-2xl my-5 font-semibold">
        🐶 Try Sara's Wholesome Food
      </div>
      <div className="flex flex-start">
        <div className="flex justify-start items-center  gap-5">
          {/* Map over the saraFood array and render each item */}
          {saraFood.map((foodItem) => (
            <div
              key={foodItem.id}
              className="flex flex-col justify-start items-center"
            >
              <img
                src={foodItem.image}
                className="w-[310px]"
                alt={foodItem.title}
              />
              <div>{foodItem.title}</div>
              <div className="border border-orange-500 w-20 my-1" />
              <div>Starting at Rs{foodItem.price}</div>
            </div>
          ))}
        </div>
      </div>

      <img src="src/assets/Frame_counting.png" className="mt-6" />

      <div className="text-2xl mb-8 font-semibold">🤩️ New In Store</div>
      <div className="flex flex-start justify-between items-center gap-2">
        <img
          src="src/assets/newInStore/bone_broth_new_in_store.png"
          className="w-[310px]"
        />
        <img
          src="src/assets/newInStore/bowls_new_in_store.png"
          className="w-[310px]"
        />
        <img
          src="src/assets/newInStore/floor_cleaner_new_in_store.png"
          className="w-[310px]"
        />
        <img
          src="src/assets/newInStore/perfume_new_in_store.png"
          className="w-[310px]"
        />
      </div>
    </section>
  );
};

export default Sara;
