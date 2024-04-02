import React, { useState } from "react";

const ButtonDisplay = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="flex justify-center gap-14 items-center text-2xl font-semibold mt-2 flex-wrap">
      <button
        className={`font-bold py-2 px-4 rounded mr-4 mb-4 ${
          activeButton === 1 && "bg-orange-600"
        }`}
        onClick={() => handleButtonClick(1)}
      >
        FOOD
      </button>
      <button
        className={` font-bold py-2 px-4 rounded mr-4 mb-4 ${
          activeButton === 2 && "bg-orange-600"
        }`}
        onClick={() => handleButtonClick(2)}
      >
        LITTER
      </button>
      <button
        className={`font-bold py-2 px-4 rounded mb-4 ${
          activeButton === 3 && "bg-orange-600"
        }`}
        onClick={() => handleButtonClick(3)}
      >
        TREATS
      </button>

      <div className="text-center w-full">
        {activeButton === 1 && (
          <div className="bg-gray-200 p-4 rounded">
            <img src="https://shorturl.at/vDK56" />
          </div>
        )}
        {activeButton === 2 && (
          <div className="bg-gray-200 p-4 rounded">
            <img src="https://shorturl.at/owxHP" />
          </div>
        )}
        {activeButton === 3 && (
          <div className="bg-gray-200 p-4 rounded">
            <img src="https://shorturl.at/joPSX" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonDisplay;
