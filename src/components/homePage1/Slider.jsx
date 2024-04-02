import React, { useEffect, useState } from "react";
import "./slider.css";

const Slider = () => {
  const slides = [
    {
      image:
        "https://headsupfortails.com/cdn/shop/files/saras-web-65d736da0ed77_1500x.webp?v=1708611605",
      index: 0,
    },
    {
      image:
        "https://headsupfortails.com/cdn/shop/files/treats-web-65d736dde8a86_1500x.webp?v=1708611625",
      index: 1,
    },
    {
      image:
        "https://headsupfortails.com/cdn/shop/files/grooming-web-65d736d81ec69_1500x.webp?v=1708611646",
      index: 2,
    },
    {
      image:
        "https://headsupfortails.com/cdn/shop/files/dd-web-65d736c0b38bc_1500x.webp?v=1708611678",
      index: 3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Function to move to the next slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]); // Include slides.length in the dependency array

  const handleButtonClick = (index) => {
    setCurrentSlide(index);
  };
  // Calculate translateX dynamically based on the current slide index
  const calculateTranslateX = (index) => {
    let translateX = 0; // Initial value for the first slide
    for (let i = 1; i <= index; i++) {
      let translateXNew = translateX + 1200 + 50 * i;
      translateX = translateXNew; // Increase translateX by 40px for each subsequent slide
    }
    return -translateX; // Return the negative value for the transform
  };

  return (
    <div>
      <div className="w-full h-[350px] mx-7 m-auto rounded-md flex items-center flex-nowrap overflow-x-hidden relative">
        <div
          className="flex gap-[50px] absolute top-0 transition-transform duration-500"
          style={{
            transform: `translateX(${calculateTranslateX(currentSlide)}px)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-[1200px] h-[340px] flex-shrink-0 relative`}
            >
              <img
                src={slide.image}
                className={`w-full h-full absolute top-0 left-0 object-cover rounded-md`}
                alt={`Slide ${slide.index + 1}`}
              ></img>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-[600px] flex justify-evenly gap-1 items-center ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`bg-gray-400 w-[30px] h-[5px] hover:bg-black rounded focus:outline-none mr-4 cursor-pointer`}
              onClick={() => handleButtonClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
