import React from 'react'
import Slider from './Slider'

const Hero = () => {
  // const imageUrls = [
  //   "https://headsupfortails.com/cdn/shop/files/dd-web-65d736c0b38bc_1500x.webp?v=1708611678",
  //   "https://headsupfortails.com/cdn/shop/files/saras-web-65d736da0ed77_1500x.webp?v=1708611605",
  //   "https://headsupfortails.com/cdn/shop/files/treats-web-65d736dde8a86_1500x.webp?v=1708611625",
  //   "https://headsupfortails.com/cdn/shop/files/grooming-web-65d736d81ec69_1500x.webp?v=1708611646",
  // ];
  return (
    <div>
      <img src="src/assets/web_wishlist.png" className="my-2 mx-7 w-[96%] h-[200px] object-contain "/>
      <Slider />
    </div>
  )
}

export default Hero