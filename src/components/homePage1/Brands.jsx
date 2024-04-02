import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";

export function NavigationBrands() {
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
        BRANDS
        <span className="pt-1 pl-1 text-black">
          <IoIosArrowDown />
        </span>
      </div>
      {isHovered && (
        <div
          className="absolute top-full left-0 bg-white shadow p-4 rounded-md"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: "700px", height: "180px" }}
        >
          {/* Menu content here */}
          <button>POPULAR BRANDS</button>
          <ul className="flex justify-between items-center gap-4">
            <li className="flex items-start gap-4">
              <img src="https://shorturl.at/bgxJ7" className="w-[120px]"/>
              <img src="https://shorturl.at/eKP49" className="w-[120px]"/>
              <img src="https://rb.gy/kvtv5g" className="w-[120px]"/>
              <img src="https://rb.gy/nfdggl" className="w-[120px]"/>
              <img src="https://rb.gy/gagqmj" className="w-[120px]"/>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
