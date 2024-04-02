import React,{useState,useEffect} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

const ProductSliders = ({CtaCategory}) => {
  const [CtaList,setCtaList] = useState([]);
    const dogSwiperImg = [

            {
              tag:"Bed",
              img:"https://headsupfortails.com/cdn/shop/collections/50._Dog_beds.jpg?v=1676018586"
          },
                  {
                tag:"Treats",
                img:"https://headsupfortails.com/cdn/shop/collections/Dog_Biscuits.jpg?v=1668416508"
            },
            {
                tag:"Food",
                img:"https://headsupfortails.com/cdn/shop/collections/strip_banner_10_dd0bf161-7d44-4b4f-9bf3-273dcdc76ad2.jpg?v=1709210496"
            },


        ]
    const catSwiperImg = [
      {
        tag:"Treats",
        img:"https://headsupfortails.com/cdn/shop/collections/STRIP2_ae431c30-bc06-4d8d-9dc7-1c6ec6f52d4d.jpg?v=1679769173"
    },
    {
        tag:"Food",
        img:"https://headsupfortails.com/cdn/shop/collections/Cat_Food.jpg?v=1651228665"
    },
    {
        tag:"Bed",
        img:"https://headsupfortails.com/cdn/shop/collections/82._Cat_Beds_Tents.jpg?v=1665468303"
    }
    ]
    useEffect(()=>{
      if(CtaCategory=="Dog"){
        setCtaList(dogSwiperImg)
      }else{
        setCtaList(catSwiperImg)
      }

    },[])
    return (
        <>
          <Swiper
            pagination={false}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 7000 }}
            className="mySwiper "
          >
            
           { CtaList.map((e,index)=>{
              return(
              <SwiperSlide key={index}>
                <img src={e.img} alt={e.tag} className="w-full h-[80px] md:h-auto" />
              </SwiperSlide>
              )
            })
}
        </Swiper>
        </>
      );
}

export default ProductSliders