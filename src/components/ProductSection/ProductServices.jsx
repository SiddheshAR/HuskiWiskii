import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { PiPawPrintFill } from "react-icons/pi";
import { IoMdInformationCircleOutline } from "react-icons/io";

import { TbDiscount2 } from "react-icons/tb";

const ProductServices = () => {

    let services = [
        {
            "title":"Free Shipping",
            "des":"On all orders above Rs.699",
            "Tag":<FaShippingFast/>
        },
        {
            "title":"Free Returns",
            "des":"Within 7 Days(T&Cs Apply)",
            "Tag":<TbTruckReturn/>
        },
        {
            "title":"Best Deals",
            "des":"On Pet Products",
            "Tag":<TbDiscount2/>
        },
        {
            "title":"We Support",
            "des":"Monday-Saturday,9am to 9pm",
            "Tag":<MdOutlineSupport/>
        },
    ]
    
  return (
    <div className="max-w-7xl mx-auto p-3 md:p-8 gap-12">
        <h2 className="text-center my-5 md:my-8 text-2xl md:text-4xl font-semibold text-gray-600"> <span className="mb-1"><PiPawPrintFill className="inline pb-1"/><PiPawPrintFill className="inline pb-1 text-orange-500 text-3xl"/></span> Why <span className="text-orange-500"> Choose </span>us <span className="mb-1"><PiPawPrintFill className="inline pb-1 text-3xl"/><PiPawPrintFill className="inline pb-1 text-orange-500 "/></span> </h2>
    <div
    className="  
    flex flex-col justify-between 
    lg:flex-row lg:items-center"
    >
        
        <div className=" mx-auto flex flex-wrap flex-row gap-4 md:gap-14 justify-center align-middle ">
        {services.map((e,index)=>{
            return(
                <div className="flex flex-row gap-2 md:w-auto w-[160px]" key={index}>
                    <div className="text-2xl md:text-4xl flex flex-col justify-center align-middle text-orange-400">{e.Tag}</div>
                    <div>
                        <div className="text-lg  md:text-[26px] font-semibold text-gray-700">{e.title}</div>
                        <div className="text-[12px] mt-1 md:text-md font-semibold text-gray-500">{e.des}</div>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
    </div>
  )
}

export default ProductServices