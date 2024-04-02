import React from 'react'
import {Link} from 'react-router-dom';


const Promotional = () => {
  return (
    <div className="w-full bg-[#12294D] py-2" >
        <div>
            <Link to="./Dog_Food">
                <h2 className="text-white text-center">   Flat 15% OFF on Dog Treats | Shop Now </h2>
            </Link>
        </div>
    </div>
  )
}

export default Promotional