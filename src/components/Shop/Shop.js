import React, { useEffect, useState } from 'react';
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
            const addedProduct = products.find(product => product.id === id);
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
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]; // not exists tai notun koire selectedProduct boshano hoise
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id) // je pd bade add korte chaccho seta dibe
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart)
        addToDb(selectedProduct.id)
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;