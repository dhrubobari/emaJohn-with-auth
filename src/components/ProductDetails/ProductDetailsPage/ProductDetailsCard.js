import React from 'react'

const ProductDetailsCard = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  )
}

export default ProductDetailsCard;