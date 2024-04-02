import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";

export function NavigationDogs() {
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
        DOGS
        <span className="pt-1 pl-1 text-black">
          <IoIosArrowDown />
        </span>
      </div>
      {isHovered && (
        <div
          className="absolute top-full left-0 bg-white shadow p-4 rounded-md"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: "500px", height: "180px" }}
        >
          {/* Menu content here */}
          <ul className="flex justify-between items-center gap-4">
            <li className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <img
                  src="src/assets/Categories/dogFood.png"
                  className="w-[150px]"
                />
                <div className="text-xl font-normal py-2 ">Food</div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="src/assets/Categories/bats.png"
                  className="w-[150px]"
                />
                <div className="text-xl font-normal py-2 text-center">Bedding & Mats</div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="src/assets/Categories/dogTreats.png"
                  className="w-[95px]"
                />
                <div className="text-xl font-normal py-2 text-center">
                  Treats, Biscuits & Chews
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="src/assets/Categories/grooming.png"
                  className="w-[150px]"
                />
                <div className="text-xl font-normal py-2">Grooming</div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
