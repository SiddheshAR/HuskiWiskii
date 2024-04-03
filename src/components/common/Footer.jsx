import React from 'react'

import {Link} from "react-router-dom"

const FooterCol=({FootCol_1})=>{

  let FooterHead = FootCol_1.head;
  let FooterItems = [...FootCol_1.items]

  return(
    <div>
          <h2 className="font-semibold my-1 md:my-4 text-gray-700 text-lg">{FooterHead.toUpperCase()}</h2>
          <div className="list-none">
            
            {FooterItems.map((e,index)=><Link  to={`${e.link}`}  key={index}><li className="text-gray-600 text-md hover:text-orange-600 mb-3">{e.heading}</li></Link>)}
            
          </div>
    </div>
  )
}

const FooterCTA = ()=>{
  return(
    <div className="my-4  lg:max-w-[350px] md:max-w-[250px]">
      <div>
        <h2 className="font-semibold uppercase text-black text-lg">Download HUFT APP</h2>
        <div className="flex flex-col gap-3 justify-around sm:flex-row my-4">
            <img className=" w-[50%] h-[auto] lg:w-[50%]  lg:h-[auto]" src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/play_store.png?v=1683527854"></img>
            <img className=" w-[50%] h-[auto] lg:w-[50%] lg:h-[auto]" src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/app_store.png?v=1683527854"></img>
        </div>
      </div>
      <div className="bg-gray-100 p-3 md:p-6">
        <h2 className="font-semibold mb-2 text-black text-[16px] md:text-lg">Leave your Email and get offers</h2>

        <form>
          <div className="relative">
            <input className="w-full px-3 rounded-md py-2 md:py-3 text-[14px] md:text-lg" type="text" placeholder="Enter Your Email"></input>
            <button className="absolute text-white rounded-r-md bg-orange-500 right-0 px-4  py-2 md:py-3 text-[14px] md:text-lg">Add</button>
          </div>
        </form>
        <p className="py-4 text-sm text-gray-500">
        Pets are at the heart of everything we do here, they make our lives whole. With each collection, we do our best to honour them. Subscribe to our Newsletter and receive special promotions and insider information about upcoming collections.
        </p>
      </div>
    </div>
  )
}


const Footer = () => {

  let footerData =[
    {
      "head":"Online Shopping",
      "items":[
        {
          "heading":"Dog",
          "link":"/search/Dog/all"
        },
        {
          "heading":"Cats",
          "link":"/search/Cat/all"
        },
        {
          "heading":"Small Animals",
          "link":"www"
        }
      ]
    },
    {
      "head":"Quick Links",
      "items":[
        {
          "heading":"Contact us",
          "link":"www"
        },
        {
          "heading":"Track your Order",
          "link":"www"
        },
        {
          "heading":"Terms of Use",
          "link":"www"
        },
        {
          "heading":"Privacy Policy",
          "link":"www"
        },
        {
          "heading":"Returns & Exchange",
          "link":"www"
        }
      ]
    },
    {
      "head":"Explore",
      "items":[
        {
          "heading":"About Us",
          "link":"www"
        },
        {
          "heading":"Careers",
          "link":"www"
        },
        {
          "heading":"Awards",
          "link":"www"
        },
        {
          "heading":"Store Locater",
          "link":"www"
        },
        {
          "heading":"Community",
          "link":"www"
        }
      ]
    }
  ]

  return (
    <div className="w-full bg-white">    
      <div className=" pb-12 pt-8 mx-auto px-8 md:px-8 py-2 flex flex-col  sm:flex-row justify-around  ">
        <div className=" ">
        <FooterCol FootCol_1={footerData[0]} />
        </div>
        <div className=" ">
        <FooterCol FootCol_1={footerData[1]} />
        </div>
        <div className=" ">
        <FooterCol FootCol_1={footerData[2]} />
        </div>
        <div className=" ">
        <FooterCol FootCol_1={footerData[1]} />
        </div>
        <FooterCTA/>
    </div>
    </div>

  )
}

export default Footer