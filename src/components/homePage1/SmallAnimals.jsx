import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";

export function NavigationSmallAnimal() {
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
        SMALL ANIMALS
        <span className="pt-1 pl-1 text-black">
          <IoIosArrowDown />
        </span>
      </div>
      {isHovered && (
        <div
          className="absolute top-full left-0 bg-white shadow p-4 rounded-md"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: "450px", height: "150px" }}
        >
          {/* Menu content here */}
          <ul className="flex justify-between items-center gap-4">
            <li className="flex items-start gap-4">
              <img src="https://shorturl.at/lIR47" className="w-[200px]"/>
              <img src="https://shorturl.at/puV46" className="w-[200px]"/>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
