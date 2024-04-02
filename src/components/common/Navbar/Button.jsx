import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';


const Button = () => {
  let ItemsCount = useSelector((store)=>store.cart.items.length);
  return (
    // <div>
    //     <button className="bg-orange-500 text-white">
    //         Get Started
    //     </button>
    // </div>
    <div className="flex gap-1 cursor-pointer relative">
      <Link to="/cart">
        <div className="pt-1"><IoCartOutline className="hover:text-orange-400 text-3xl text-gray-600" /></div>
        <div className="absolute top-0 left-2 w-[17px] h-[17px] bg-orange-500 text-white rounded-xl text-[12px] text-center ">{ItemsCount}</div>
      </Link>
    </div>
  )
}

export default Button