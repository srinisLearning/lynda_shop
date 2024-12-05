import React from 'react'

const page = ({params}: {params: {productId: string}}) => {
  return (
    <div>the product is is {params.productId}</div>
  )
}

export default page