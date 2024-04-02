import React from 'react'

const ProductDescription = ({data}) => {
    let abc = data;

  return (
    <div className="max-w-7xl mx-auto px-8 py-2 bg-orange-50 ">
        <h2 className="font-semibold text-3xl my-2">Product Description:</h2>
        <div  dangerouslySetInnerHTML={{__html:abc}} >
            </div>
    </div>
  )
}

export default ProductDescription