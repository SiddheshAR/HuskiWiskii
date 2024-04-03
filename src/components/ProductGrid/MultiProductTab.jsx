import React,{useState,useEffect} from 'react'
import ProductGrid from './ProductGrid.jsx';


const MultiProductTab = ({category,sortInclude}) => {
    let subCategoryList = ["Food","Treats","Bed","Grooming"];
    const [subCategories,setSubCategories]= useState(0);
    const ImgList = [
        {
            title:"Food",
            catImg:"https://headsupfortails.com/cdn/shop/files/WhiskasTunaAdultDryCatFood.jpg?v=1683109213",
            dogImg:"https://headsupfortails.com/cdn/shop/files/Chicken_BrownRice.jpg?v=1698658352",
        },
        {
            title:"Treats",
            catImg:"https://headsupfortails.com/cdn/shop/files/ShebaMeltyMaguroTuna_SeafoodFlavourCatTreat-48g_58678cf7-85f9-4d6f-8ef5-755b52ce2cfe.jpg?v=1685440711",
            dogImg:"https://headsupfortails.com/cdn/shop/files/DSC_0263copy_532580e9-112e-4f1c-bdfa-cf2241f895af.jpg?v=1706684184"
        },
        {
            title:"Bed",
            catImg:"https://headsupfortails.com/cdn/shop/products/DSC_9554_6b89c6e8-8e34-4745-bc1b-8cc78407fe6e.jpg?v=1679565212",
            dogImg:"https://headsupfortails.com/cdn/shop/files/DSC_4850_8b05a838-0dc1-40f2-97d9-1966f3c452b6.jpg?v=1706079533",

        },{
            title:"Grooming",
            catImg:"https://headsupfortails.com/cdn/shop/files/DSC_3648_1e5ba45d-bf43-49ae-9f8b-7cc9b9fa1b1f.jpg?v=1692949616",
            dogImg:"https://headsupfortails.com/cdn/shop/files/NoTearsPuppy_1_-1.jpg?v=1708074797",
        }
    ];
    
  return (
    <div className="py-4 ">
        {/* Heading  */}

        {/* <div className="text-center text-2xl text-gray-800 ">{category==="Dog"?<h2>Dog Products</h2>:<h2>Cats Products</h2>}</div> */}
        {/* Sub Categories */}
        <div className="flex flex-row justify-center py-4 gap-6 md:gap-8 ">
        {ImgList.map((e,index)=>
                <div key={index} onClick={()=>setSubCategories(index)} className="flex flex-row gap-10 text-2xl cursor-pointer group">
                    {category=="Dog"?(
                    <div className="flex flex-col align-middle justify-center gap-2 md:gap-3">
                        <img className=" w-14 h-14 md:w-20 md:h-20  mx-auto rounded-full" src={e.dogImg} ></img>
                        <h4 className=" text-[13px] md:text-lg  font-semibold text-[#20437a] text-center">{e.title} </h4>
                        <div className={`border-b-4 border-b-orange-500  m-auto duration-200 group-hover:w-full ${index===subCategories?'w-full':'w-0'}`}></div>

                    </div>):(
                    <div className="flex flex-col align-middle justify-center gap-2 group ">
                        <img className=" w-14 h-14 md:w-20 md:h-20  mx-auto rounded-full" src={e.catImg} ></img>
                        <h4 className="text-[13px] md:text-lg font-semibold text-[#20437a] text-center">{e.title}</h4>
                        <div className={`border-b-4 border-b-orange-500  m-auto duration-200 group-hover:w-full ${index===subCategories?'w-full':'w-0'}`}></div>
                        {/* <div className="border-b-4 border-b-orange-500 w-0 m-auto duration-200 group-hover:w-full"></div> */}
                    </div>
                    )}
                </div>
        )}
        </div>
        {/* Product Grid */}
        <div>
            <ProductGrid sortInclude={sortInclude} category={category} sub_category={subCategoryList[subCategories]} optionalCount={6}/>
        </div>
    </div>
  )
}

export default MultiProductTab