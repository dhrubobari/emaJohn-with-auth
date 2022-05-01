import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import UseProducts from '../Hooks/UseProducts';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = UseProducts(); 
    const [cart, setCart] = useState([])

    useEffect(() => {
        // console.log('fetch uploaded')
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, [])

    useEffect(() => {
        console.log('local storage first line', products)
        const storedCart = getStoredCart(); // storedCart ekta object dibe
        const savedCart = []; // ei new array tei push korbo
        for(const id in storedCart){
            const addedProduct = products.find(product => product._id === id);
            if(addedProduct){
                const quantity = storedCart[id]; // storedCart er moddhei id ase sekhane quantity ase
                addedProduct.quantity = quantity; // addedProduct e .quantity ase ar etar value hbe quantity.
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart); // ekhane thk display
        
    }, [products]) // this useEffect will be depended on [products]
    
    const handleAddToCart = (selectedProduct) => {
        // console.log(product)
        // do not do cart.push(product);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id)
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]; // not exists tai notun koire selectedProduct boshano hoise
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id) // je pd bade add korte chaccho seta dibe
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart)
        addToDb(selectedProduct._id)
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;