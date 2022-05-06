import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import UseCart from '../Hooks/UseCart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [cart, setCart] = UseCart();
    const navigate = useNavigate();
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id); // refresh dile joyta pd remove kora hoisilo tototai dekhabe
    }

    return (
        <div className="shop-container">
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                    key={product._id}
                    product = {product}
                    handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={()=>navigate('/shipment')}>Proceed Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;