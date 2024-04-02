import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { useParams } from "react-router-dom";
// import { dogProducts } from "../api/dogs";
import PriceCalculatorApp from "../components/dogProducts/useSelectedPrice";
import {Link} from 'react-router-dom'

// import {useDispatch} from 'react-redux';
// import {addProduct} from '../utils/cartSlice.js';

const DogCategory = () => {
  const { dynamic } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  // const dispatch = useDispatch();
  // function ProductDispatch(){
  //   dispatch(addProduct())
  // }

  // Define filter functions for each category
  const filters = {
    food: (product) => product.type.toLowerCase().includes("food"),
    bedding: (product) =>
      product.type.toLowerCase().includes("bed") ||
      product.type.toLowerCase().includes("mat"),
    treats: (product) =>
      product.type.toLowerCase().includes("treat") ||
      product.type.toLowerCase().includes("biscuits"),
    grooming: (product) =>
      !product.type.toLowerCase().includes("food") &&
      !product.type.toLowerCase().includes("bed") &&
      !product.type.toLowerCase().includes("mat") &&
      !product.type.toLowerCase().includes("treat") &&
      !product.type.toLowerCase().includes("biscuits"),
  };

  // Filter products based on the category
  const productsToShow = dogProducts.filter(filters[dynamic] || (() => true));

  return (
    <div className="flex justify-center">
      <div className="m-[55px] flex flex-wrap items-center gap-[50px] mx-[126px]">
        {productsToShow.map((product) => (
          <div
            key={product.id}
            className="border border-blue-800 w-[350px] h-[625px] rounded-xl"
          >
            <img
              src={product.featured_image}
              alt="Dog Products"
              className="w-[350px] m-0 p-0"
            />
            <div className="bg-teal-800 w-[348px] mt-2 flex flex-row text-white font-normal">
              <div className="pt-2 mr-1 ml-2">
                <CiStar />
              </div>
              <div>
                Up to{" "}
                <span className="text-orange-600 font-semibold text-lg">
                  4x Points
                </span>
              </div>
              <div className="b pt-2 ml-[75px] mr-1 font-bold">
                <CiStar />
              </div>
              <div className="pt-1 mr-2">5.0/5.0</div>
            </div>
           <Link to={`./dog/${product.id}`}> <div className="text-lg font-normal mx-2">{product.title}</div></Link>
            <div>
              <PriceCalculatorApp productId={product.id} />
            </div>
            <button className="absolute bg-orange-600 text-xl font-normal rounded-2xl m-2 px-[114px] py-2 text-white">

              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogCategory;
