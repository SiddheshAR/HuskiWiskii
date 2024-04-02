import React from 'react'

const PetHead = () => {
  return (
    <div className=" bg-white">
        <div className="relative px-4 text-xl md:text-3xl lg:text-4xl md:max-w-7xl py-4 md:py-8 mx-auto  font-semibold text-center  text-gray-700">
            <div className="flex flex-row justify-center align-middle md:gap-4">
                <div className="flex flex-col align-middle justify-center">
                    <img className="h-14 w-14 md:h-28 md:w-28" src="https://headsupfortails.com/cdn/shop/files/awards_dog_02.png?v=1640584801"/>
                </div>

                <h2 className=" py-8 " ><span className="text-orange-500">Browse </span>from wide range of Pet Products.</h2>
                <div className="flex flex-col align-middle justify-center">
                    <img className=" h-14 w-14 md:h-28 md:w-28" src="https://headsupfortails.com/cdn/shop/files/cat_image_0efd88cc-4e9b-4195-a376-286b74c06662.png?v=1640334417"/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default PetHead