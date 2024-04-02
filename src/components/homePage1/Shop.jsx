import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";

export function NavigationShop() {
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
        SHOP BY LIFESTAGE
        <span className="pt-1 pl-1 text-black">
          <IoIosArrowDown />
        </span>
      </div>
      {isHovered && (
        <div
          className="absolute top-full left-0 bg-white shadow p-4 rounded-md"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: "600px", height: "270px" }}
        >
          {/* Menu content here */}
          <ul className="flex justify-between items-center gap-4">
            <li className="flex flex-col items-start gap-4">
              <div className="flex items-start gap-4">
                <img src="https://rb.gy/389v02" className="w-[180px]" />
                <img src="https://rb.gy/pni43t" className="w-[180px]" />
                <img src="https://shorturl.at/pHQY1" className="w-[180px]" />
              </div>
              <img src="https://shorturl.at/abfC2" className="w-[600px] px-[90px]" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
