import React from 'react'

const CardSkeleton = () => {
  return (
    <div
    className="bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-[329px] p-5  md:w-[310px] flex flex-col gap-2 rounded-xl hover:-translate-y-2 duration-300"
  >
        <div className="animate-pulse">
            <div className="w-[100%] mx-auto">
                {/* Img  */}
                <div className="w-[100%] h-[280px] bg-gray-200">

                </div>
            </div>
            <div className="px-1 bg-gray-200 h-10 my-2">
                {/* Title */}
            </div>
            <div>
                <div className="px-1 bg-gray-200 h-3 w-32 my-2">
                {/* Options */}
                </div>
                <div className="px-1 bg-gray-200 h-8 w-24 my-2">
                {/* Pack of */}
                </div>
            </div>
            <div className="px-1 bg-gray-200 h-8 w-full my-2">
                {/* Price */}
            </div>
            <div  className="px-1 bg-gray-200 h-10 w-full my-2">
                {/* Add to cart */}
            </div>
        </div>
    </div>
  )
}

export default CardSkeleton