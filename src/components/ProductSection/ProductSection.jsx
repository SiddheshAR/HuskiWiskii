// import mainImg from './MainImg.jpg'
import {useState,useEffect} from 'react';

// import ProductReviews from "./ProductReviews.jsx"
// import {dogProducts} from '../../api/dogs/index.js';

import {addProduct} from '../../utils/cartSlice.js';
import {useDispatch} from 'react-redux';



const PriceSection = ({getPrice,quantity})=>{

  return(
    <div className="flex flex-row gap-2 ">
        <div>
          <h3 className="text-xl mt-2 text-blue-600 font-semibold line-through ">MRP: ₹ {((getPrice()*quantity)*1.2).toFixed(2)} </h3>
          <p className="text-[12px] text-blue-600 ">Incl. of all taxes</p>
        </div>
        <div className="text-3xl text-blue-700 font-bold">
        ₹ {getPrice()*quantity} 
        </div>
        <div className="text-green-500 text-xl mt-2 font-semibold ">
            15% Off
        </div>
    </div>

  )
}

const ProductSection = ({data}) => {
    const [selectedWeight, setSelectedWeight] = useState("");
    const [selectedPack, setSelectedPack] = useState("");
    const [selectedVariant, setSelectedVariant] = useState(null);
  const [ProdDispImg,setProdDispImg] = useState(0);
    const dispatch = useDispatch();

    const handleAddItem = (data,addItem,selectedWeight,selectedPack,RunningPrice)=>{
      // console.log(addItem);
      dispatch(addProduct([data,addItem,selectedWeight,selectedPack,RunningPrice]))
    }

    // WHile Configuring Redux we will also pass the below addItem value aswell to calculate quantity.
    const [addItem,setAdditem] = useState(1);
    function AddItem(){
          if(addItem<6){
              setAdditem(addItem+1)
          }
    }
    
    function RemoveItem(){
      if(addItem>1){
          setAdditem(addItem-1)
      }
    }

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
    className=" max-w-7xl mx-auto p-8 gap-12 
    flex flex-col justify-between 
    lg:flex-row lg:items-center">
        {/* Product Image Section. */}
        <div className="flex flex-col gap-6 lg:w-2/4">
            <img src={data.images[ProdDispImg]} className="w-full h-full aspect-square object-cover rounded-xl" alt="tt"/>
            <div className="flex flex-row gap-2 justify-between h-20">
                <img src={data.images[0]} onClick={()=>setProdDispImg(0)} className="w-20 h-20 rounded-md cursor-pointer" alt=""/>
                <img src={data.images[1]} onClick={()=>setProdDispImg(1)} className="w-20 h-20 rounded-md cursor-pointer" alt=""/>
                <img src={data.images[2]} onClick={()=>setProdDispImg(2)} className="w-20 h-20 rounded-md cursor-pointer" alt=""/>
                <img src={data.images[3]} onClick={()=>setProdDispImg(3)} className="w-20 h-20 rounded-md cursor-pointer" alt=""/>
            </div>
        </div>
        
        {/* Product Data Section. */}
        <div className="flex flex-col gap-6 lg:w-2/4">
            <div>
                <span className="text-orange-600 font-semibold">{data.type}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700">{data.title}</h2>
            </div>
            <p className="text-gray-600">{data.description}</p>
            {/* {data.description} */}
                {/* <div dangerouslySetInnerHTML={{__html:data.description}} >
                </div> */}

            
            {/* <h5 className="text-2xl font-semibold text-gray-700"> {getPrice()*addItem} {getPrice()*addItem}₹</h5> */}
              <PriceSection getPrice={getPrice} quantity={addItem} />
            <div>
                <h2 className=" text-lg font-semibold text-gray-700">Choose Options:</h2>
                <div className="mb-6">
                        {weightOptions.length > 1 && (
                        <div className="flex flex-wrap  gap-2 my-2">
                        {weightOptions.map((option) => (
                            <button
                            key={option}
                            onClick={() => setSelectedWeight(option)}
                            className={`border rounded-md ${
                                selectedWeight === option
                                ? "bg-orange-500 text-white"
                                : "bg-gray-200 text-gray-800"
                            } px-3 py-2 `}
                            >
                            {option}
                            </button>
                        ))}
                        </div>
                    )}
                </div>
                <div>
                    {packOptions.length > 1 && (
                    <div className="flex flex-wrap gap-2 my-2">
                        {packOptions.map((option) => (
                            <button
                            key={option}
                            onClick={() => setSelectedPack(option)}
                            className={`border rounded-md ${
                                selectedPack === option
                                ? "bg-orange-500 text-white"
                                : "bg-gray-200 text-gray-800"
                            } px-3 py-2`}
                            >
                            {option}
                            </button>
                        ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-3">
                <div>   
                  <button onClick={RemoveItem} className="w-12 h-14 bg-gray-200 hover:bg-orange-400 hover:text-white rounded-md text-2xl cursor-pointer" >-</button>
                  <span className="w-12 h-14 text-2xl mx-4 "> {addItem}   </span>
                  <button onClick={AddItem} className="w-12 h-14 bg-gray-200 hover:bg-orange-400 hover:text-white rounded-md text-2xl cursor-pointer">+</button>
                </div>

                <button onClick={()=>{
                  let RunningPrice = getPrice();
                  handleAddItem(data,addItem,selectedWeight,selectedPack,RunningPrice)}} className="w-full h-14  md:w-[142px] border-none rounded-lg text-center  bg-orange-500 px-6 text-white py-3 md:px-1 text-xl cursor-pointer">Buy now</button>

            </div>
        </div>
    </div>
  )
}

export default ProductSection