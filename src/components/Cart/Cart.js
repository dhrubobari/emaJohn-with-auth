import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity; // ager quantity sathe product er quantity add
        total = total + product.price * product.quantity; // price er sathe quantity er gun
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2)); // 0.1 = 10 diye vag, toFixed = .000000 jate na hoy, parseFloat = string er sathe jate number add na hoy.
    const grandTotal = total + shipping + tax;
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>selected items: {quantity}</p>
            <p>total price: ${total}</p>
            <p>total shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;