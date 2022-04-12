import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import UseCart from '../Hooks/UseCart';
import UseProducts from '../Hooks/UseProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = UseProducts();
    const [cart, setCart] = UseCart(products);
    const navigate = useNavigate();
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id); // refresh dile joyta pd remove kora hoisilo tototai dekhabe
    }

    return (
        <div className="shop-container">
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
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