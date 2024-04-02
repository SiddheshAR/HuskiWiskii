import React from "react";
import { GiHotMeal } from "react-icons/gi";
import { NavigationBrands } from "./Brands";
import { NavigationCat } from "./Cats";
import { NavigationDogs } from "./Dogs";
import { NavigationShop } from "./Shop";
import { NavigationSmallAnimal } from "./SmallAnimals";

const Navitems = () => {
  return (
    <div>
      <nav className="w-full h-[40px] flex justify-between items-center px-20 py-2 navbar gap-4 font-semibold text-black">
        <NavigationDogs />
        <NavigationCat />
        <NavigationSmallAnimal />
        <NavigationBrands />
        <NavigationShop />
        <div className="flex justify-between items-start gap-2">
          <div className="hover:text-orange-600 cursor-pointer">
            LEARN WITH HUFT
          </div>
        </div>
        <div className="flex justify-between items-start gap-2">
          <div className="hover:text-orange-600 cursor-pointer">
            STORE LOCATOR
          </div>
        </div>
        <div className="flex justify-between items-start gap-2">
          <div className="hover:text-orange-600 cursor-pointer">MEGA SALE</div>
        </div>
        <div className="flex justify-between items-start gap-2">
          <div className="hover:text-orange-600 cursor-pointer">
            FRESH MEALS
          </div>
          <span className="pt-1">{<GiHotMeal />}</span>
        </div>
      </nav>
      <div className="w-full bg-black text-white font-normal mt-2 text-center py-1">
        Flat 20% OFF on Royal Canin | Shop Now
      </div>
    </div>
  );
};

export default Navitems;
