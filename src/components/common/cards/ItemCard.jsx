import React,{useState,useEffect} from 'react'
// import PriceCalculatorApp from "./useSelectedPrice";
import {Link} from 'react-router-dom'
import { CiStar } from "react-icons/ci";
import {useDispatch} from 'react-redux';
import {addProduct} from '../../../utils/cartSlice.js';


const PriceSection = ({getPrice})=>{
    return(
      <div className="flex flex-row gap-2 ">
          <div>
            {/* <h3 className="text-md mt-2 text-blue-600 font-semibold line-through ">MRP: ₹ {((getPrice())*1.2).toFixed(2)} </h3> */}
            <h3 className="text-md mt-2 text-blue-600 font-semibold line-through ">MRP: ₹ {((getPrice())*1.2).toFixed(0)} </h3>

            <p className="text-[12px] text-blue-600 ">Incl. of all taxes</p>
          </div>
          <div className="text-lg text-blue-700 mt-2 font-bold">
          ₹ {((getPrice())*1).toFixed(0)}
          </div>
          <div className="text-green-500 text-lg mt-2 font-semibold ">
              15% Off
          </div>
      </div>
  
    )
  }



const ItemCard = ({data}) => {
  const dispatch = useDispatch();
  const handleAddItem = (ItemData,Quantity,Weight,Pack,Price)=>{
    
    dispatch(addProduct([ItemData,Quantity,Weight,Pack,Price]));
  }
    const [selectedWeight, setSelectedWeight] = useState("");
    const [selectedPack, setSelectedPack] = useState("");
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [addItem,setAdditem] = useState(1);
    let variants = data.variants;
    const weightOptions = Array.from(
        new Set(variants.map((variant)=>variant.option1).filter(Boolean))
      );

    const packOptions = Array.from(
        new Set(variants.map((variant)=>variant.option2).filter(Boolean))
        );
    // console.log(weightOptions , packOptions);

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

      const getPrice = () => {
        if (selectedVariant) {
          return (selectedVariant.price / 100).toFixed(2);
        } else if (variants.length === 1) {
          return (variants[0].price / 100).toFixed(2);
        } else {
          return "0.00";
        }
      };
  return (
    <div
    key={data.id}
    className="bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-[300px] p-5 h- md:w-[330px] flex flex-col gap-2 rounded-xl hover:-translate-y-2 duration-300"
  >
    <div className="w-[100%] mx-auto " >
      <img
        src={data.featured_image}
        alt="Dog Products"
        className="w-[100%] h-[280px]"
      />
    </div>
    <div className="px-1 flex flex-col gap-2">
      <Link to={`../${data.category}/${data.sub_category}/${data.id}`}  >
      <div className="text-lg font-normal hover:text-orange-500 ">
        {data.title.length >= 50
          ? `${data.title.substring(0, 50)}...`
          : `${data.title}`}
    </div>
      </Link>

    <div>
      {/* <PriceCalculatorApp productId={data.id} /> */}
      <h2 className=" text-sm font-semibold text-gray-700 my-1">Choose Options:</h2>
            <div className="flex gap-4 ">
              
                <div className="">
                    {weightOptions.length > 1 && (
                      <select
                        value={selectedWeight}
                        onChange={(e) => setSelectedWeight(e.target.value)}
                        className="border rounded-md bg-gray-200 text-gray-800 px-2 py-1"
                      >
                        {weightOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                </div>

                <div>
                    {packOptions.length > 1 && (
                      <select
                        value={selectedPack}
                        onChange={(e) => setSelectedPack(e.target.value)}
                        className="border rounded-md bg-gray-200 text-gray-800 px-2 py-1"
                      >
                        {packOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                </div>
            </div>
    </div>
    <PriceSection getPrice={getPrice}  />
    <button 
    onClick={()=>{
      const RunningPrice = getPrice();
      handleAddItem(data,addItem,selectedWeight,selectedPack,RunningPrice)}} 
    
    className=" bg-orange-500 hover:bg-orange-600 text-xl font-normal rounded-md   py-2 text-white">
      Add To Cart
    </button>
    </div>
  </div>
  )
}

export default ItemCard