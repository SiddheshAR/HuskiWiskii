import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'

const Navbar = () => {

  const cartItems = useSelector((store)=>store.cart.items);

  return (
    <nav className="bg-white text-[17px] w-full h-18 flex flex-between items-center px-10 py-2 gap-10">
      <img src="src/assets/logo_new.png" alt="logo" className="w-[240px]" />
      <input
        type="text"
        placeholder="Search anything for your pet..."
        className="rounded-2xl border border-gray-500 w-[730px] h-[35px] pl-2"
      ></input>
      <div className="flex gap-1 cursor-pointer">
        <div className="pt-1"><IoCallOutline /></div>
        <div>Support</div>
      </div>
      <div className="flex gap-1 cursor-pointer">
        <div className="pt-1"><VscAccount /></div>
        <div>Account</div>
      </div>
      <Link to="./cart" >
      <div className="flex gap-1 cursor-pointer relative">
        <div className="pt-1"><IoCartOutline /></div>
        <div>Cart</div>
        <div className="absolute top-0 left-2 w-[14px] h-[14px] bg-orange-500 text-white rounded-xl text-[9px] text-center ">{cartItems.length}</div>
      </div>
      </Link>
    </nav>
  );
};

export default Navbar;
