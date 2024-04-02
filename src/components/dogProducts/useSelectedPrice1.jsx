import React, { useEffect, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
// import { dogProducts } from "../../api/dogs";

const PriceCalculatorApp = ({ productId }) => {
  const [selectedWeight, setSelectedWeight] = useState("");
  const [selectedPack, setSelectedPack] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);

  // Find the product with the matching ID
  const product = dogProducts.find((product) => product.id === productId);

  // Extract variants from the product
  const variants = product.variants || [];

  // Filter out options that have null values
  const weightOptions = Array.from(
    new Set(variants.map((variant) => variant.option1).filter(Boolean))
  );
  const packOptions = Array.from(
    new Set(variants.map((variant) => variant.option2).filter(Boolean))
  );

  useEffect(() => {
    // Set default selections to the first option of each variant if not selected yet
    if (!selectedWeight && weightOptions.length > 0) {
      setSelectedWeight(weightOptions[0]);
    }
    if (!selectedPack && packOptions.length > 0) {
      setSelectedPack(packOptions[0]);
    }
  }, [selectedWeight, selectedPack, weightOptions, packOptions]);

  useEffect(() => {
    // Find the selected variant based on weight and pack
    const variant = variants.find((variant) => {
      if (variant.option1 === selectedWeight) {
        if (selectedPack === "") {
          return true; // Match if option2 is empty
        } else {
          return variant.option2 === selectedPack;
        }
      }
      return false;
    });

    setSelectedVariant(variant);
  }, [selectedWeight, selectedPack, variants]);

  // Get the price based on the selected variant or the first variant if only one is available
  const getPrice = () => {
    if (selectedVariant) {
      const price = selectedVariant.price / 100;
      return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
    } else if (variants.length === 1) {
      const price = variants[0].price / 100;
      return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
    } else {
      return "0.00";
    }
  };

  return (
    <>
      <p className="font-semibold text-xl text-blue-800 mt-1 mx-2 flex items-center">
        <span>
          <FaIndianRupeeSign />
        </span>
        <span className="text-2xl font-semibold">{getPrice()}</span>
      </p>
      {weightOptions.length > 1 ? (
        <div className="flex flex-wrap mx-2 gap-2 my-2">
          {weightOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedWeight(option)}
              className={`border rounded-md ${
                selectedWeight === option
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800"
              } px-1`}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="h-[40px]"></div>
      )}
      {packOptions.length > 1 ? (
        <div className="flex flex-wrap mx-2 gap-2 my-2">
          {packOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedPack(option)}
              className={`border rounded-md ${
                selectedPack === option
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800"
              } px-1`}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="h-[40px]"></div>
      )}
    </>
  );
};

export default PriceCalculatorApp;
