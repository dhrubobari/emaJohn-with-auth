import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name, category, img, price, ratings} = props.product;
    // console.log(props)
    return (
        <div className="product">    
            <img src={img} alt="" />
            <div className="product-info">
            <p className="product-name">{name}</p>
            <p>price: ${price}</p>
            <p><small>category: {category}</small></p>
            <p><small>ratings: {ratings} stars</small></p>
            </div>
            
            <button onClick={() => props.handleAddToCart(props.product)} className="button-cart">
            <p>Add to Cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        
        </div>
    );
};

export default Product;