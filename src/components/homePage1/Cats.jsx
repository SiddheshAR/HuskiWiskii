import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";

export function NavigationCat() {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative">
      <div
        className="hover:text-orange-600 cursor-pointer flex"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        CATS
        <span className="pt-1 pl-1 text-black">
          <IoIosArrowDown />
        </span>
      </div>
      {isHovered && (
        <div
          className="absolute top-full left-0 bg-white shadow p-4 rounded-md"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: "350px", height: "150px" }}
        >
          {/* Menu content here */}
          <ul className="flex justify-between items-center gap-4">
            <li className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <img
                  src="src/assets/Categories/catFood.png"
                  className="w-[95px]"
                />
                <div className="text-xl font-normal py-2">Cat Food</div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="src/assets/Categories/catLitter.png"
                  className="w-[95px]"
                />
                <div className="text-xl font-normal py-2 text-center">
                  Cat Litter
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="src/assets/Categories/catTreats.png"
                  className="w-[95px]"
                />
                <div className="text-xl font-normal py-2 text-center">
                  Cat Treats
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
