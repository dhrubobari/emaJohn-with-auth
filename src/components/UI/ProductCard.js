import React from 'react'
import { useDispatch } from 'react-redux'
import '../Product/Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({item}) => {
  return (
    <>
      <div className="product">    
        <img src={item.imgUrl} alt="" />
        <div className="product-info">
        <p className="product-name">{item.title}</p>
        <p>{item.description}</p>
        <p>price: ${item.price}</p>
        <p><small>category: {item.category}</small></p>
        </div>
        <button className="button-cart">
        <p>Add to Cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>     
      </div>
    </>
  )
}

export default ProductCard