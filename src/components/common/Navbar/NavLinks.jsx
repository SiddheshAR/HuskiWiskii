import {useState} from 'react';
import {Link} from 'react-router-dom';
import {nanoid} from 'nanoid';
import { IoIosArrowDown } from "react-icons/io";

const NavLinks = ({setToggle}) => {
    const links = [{
        name: "Dog",
        submenu: true,
        sublinks: [
          {
            Head: "Food",
            Link: "./Dog_Food"
          },
          {
            Head: "Treats",
            Link: "./Dog_Treats"
          },
          {
            Head: "Grooming",
            Link: "./Dog_Grooming"
          },
          {
            Head: "Bed",
            Link: "./Dog_Bed"
          },
        ]
      
      },
      {
        name: "Cat",
        submenu: true,
        sublinks: [
          {
            Head: "Food",
            Link: "./Cat_Food"
          },
          {
            Head: "Treats",
            Link: "./Cat_Treats"
          },
          {
            Head: "Grooming",
            Link: "./Cat_Grooming"
          },
          {
            Head: "Bed",
            Link: "./Cat_Bed"
          },
        ]
      
      },
      {
        name: "Other Pets",
        submenu: true,
        sublinks: [
          {
            Head: "Rabbit",
            Link: "./Rabbit"
          },
          {
            Head: "Birds",
            Link: "./Birds"
          }
        ]
      }
    ]
const [varHeading,setHeading]=useState('');
const [subHead,setSubHead] = useState('');

const setNavHead =(m)=>{
    if(m===varHeading){
        setHeading("")
    }else{
        setHeading(m)
    }
}
const setNavSubHead =(n)=>{
    if(n===subHead){
        setSubHead("")
    }else{
        setSubHead(n)
    }
}

  return (
    <>
        {links.map((e)=>(
            <div key={nanoid()}>
                <div className=" font-poppins pointer-cursor px-3 py-4 group">
                    <h1 className="cursor-pointer duration-200 text-gray-600 hover:text-orange-500 flex justify-between" onClick={()=>setNavHead(e.name)}>{e.name} 
                    <IoIosArrowDown className={`md:hidden duration-300 ${(varHeading==e.name)&&"rotate-180"}`}/></h1>
                    {
                        e.submenu && (
                        <div className="relative bg-white ">
                            <div className="absolute top-50 left-[-15px] w-40 z-50 hidden group-hover:md:block shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-md">
                              
                                {/* <div className="py-2">
                                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45">

                                    </div>
                                </div> */}

                                <div className="bg-white px-4 py-6 grid grid-cols-1 gap-10 ">
                                    {
                                        e.sublinks.map((sublinks)=>(
                                            <div className="" key={nanoid()}>
                                                <Link to={`${sublinks.Link}`}>
                                                <h1 className={`text-md pt-2  text-gray-800 hover:text-orange-500 `}>{sublinks.Head} </h1>
                                                </Link> 
                                                {/* className={`flex justify-between pr-10 py-2 ${(subHead==slink.Head)&&" text-orange-400"} `} */}
                                                {/* {
                                                    sublinks.sublink.map((slink)=>(
                                                            <li key={nanoid()} className="font-semibold text-sm text-gray-500 hover:text-orange-500">
                                                                <Link className="hover:text-orange-400"  to={`${slink.link}`}>
                                                                   <h2 className=" capitalize text-lg py-1"> {slink.name}</h2>
                                                                </Link>
                                                            </li>                                                      
                                                    ))
                                                } */}
                                            </div>
                                        )
                                        )
                                    }
                                </div>
                            </div>
                        </div>)
                    }
                    
                </div>
{/* Mobile View */}
                <div className="md:hidden">

                   {
                        (varHeading===e.name) &&(e.sublinks.map((slink)=>{
                            return(
                                <div key={nanoid()}>
                                    <div className="pl-6">
                                      <Link to={`${slink.Link}`}>
                                        <h1 className={`flex justify-between pr-10 text-gray-600 hover:text-orange-500 py-2 ${(subHead==slink.Head)&&" text-orange-400"} `} onClick={()=>{setNavSubHead(slink.Head);setToggle(false);}}>{slink.Head} 
                                        {/* <IoIosArrowDown className={`md:hidden  duration-300 text-black ${(subHead==slink.Head)&&"rotate-180 text-orange-400"}`}/> */}

                                        </h1>
                                        </Link>
                                    </div>
                                    </div>
                                )
                        }))
                    }

                </div>
            </div>
        )
        )}
    </>
  )
}

export default NavLinks