import React,{useState} from 'react'
import huskLogo from '../../../media/huskLogo-1.svg';
import {Link} from 'react-router-dom';
import NavLinks from './NavLinks.jsx';
import Button from './Button.jsx';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import SearchBar from './SearchBar.jsx'

const Navbar = () => {

    const [toggle,setToggle] = useState(false);
    // console.log("change")
  return (
  
    <nav className="bg-white">
        <div className="flex items-center font-medium justify-around ">
            <div className="z-50 p-2 md:p-5 md:w-auto w-full flex justify-between">
                <Link to="./">
                <img className="md:cursor-pointer h-16 pt-1 md:pt-2 md:w-20 md:h-20" src={huskLogo}></img></Link>
                <div className="md:hidden pt-4">
                {/* <input type="text" name="Search" className="text-md w-[95%] text-gray-600  p-1  border border-orange-300 rounded-lg" placeholder={"Search"}/> */}
                <div className="block md:hidden md:w-[50%]">
                {/* <h2>Search Index</h2>  */}
                <SearchBar/>
            </div>
                </div>
                <div className="flex flex-row gap-4 md:hidden">
                    <div className="pt-4">
                        <Button/>
                    </div>
                                    
                    <div className="pt-5  " onClick={()=>setToggle(!toggle)} >
                        {toggle?<IoMdClose className="text-xl text-gray-600"/>:<GiHamburgerMenu className="text-xl text-gray-600"/>}
                    </div>
                </div>
            </div>
            <div className="hidden md:block md:w-[50%]">
                {/* <h2>Search Index</h2>  */}
                <SearchBar/>
            </div>
            <ul className="md:flex hidden uppercase items-center gap-6 pr-4">
                <li>
                    <Link className="py-2 px-3 text-gray-600 hover:text-orange-500" to="/" >Home</Link>
                </li>
                <NavLinks setToggle={setToggle}/>
                <Button/>
            </ul>

            {/* Mobile View */}
            <ul className={`z-40 ${toggle?"left-0":"left-[-100%]"} duration-500 bg-white absolute w-full h-full bottom-0 py-24 pl-4`} >
                    <div className="">
                        <li className="px-3 py-4 text-gray-600 hover:text-orange-500">
                            <Link to="./">
                                Home
                            </Link>
                        </li>
                        <NavLinks setToggle={setToggle}/>
                        {/* <Button /> */}
                    </div>
            </ul>

        </div>
    </nav>
    
  )
}

export default Navbar