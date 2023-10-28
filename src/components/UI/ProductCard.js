import React from 'react'
import { useDispatch } from 'react-redux'

const ProductCard = ({item}) => {
  return (
    <>
        <div className="card w-96 glass" key={item.id}>
        <figure>
          <img src={item.imgUrl} alt=""/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard