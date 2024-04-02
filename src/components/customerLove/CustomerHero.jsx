import React from 'react'

const CustomerHero = () => {
  return (
    <div>
      <div className="w-full">
         <img src="src/assets/endlessLove/Endless Love.png" className="w-[1500px]"/>
         <div className="text-black text-xl font-normal text-center">Our inbox is always overflowing with
         <br/>heartwarming messages from pet parents
         <br /><span className="font-bold">Here's a glimpse of that love</span>
         </div>
         <img src="https://shorturl.at/anqP3"/>
      </div>
     
      <div className="grid grid-cols-4 bg-[#F4EDDB]">
          <div className="bg-white">
            <div className="">1000+</div>
            <div className="">Pet Products</div>
          </div>
      </div>
    </div>
  )
}

export default CustomerHero