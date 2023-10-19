import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import UseCart from '../Hooks/UseCart';
import Product from '../Product/Product';
import './Shop.css'
import Banner from '../Banner/Banner';

const Shop = () => {
    const [cart, setCart] = UseCart(); // the next page will not reset added prods
    const [pagecount, setPagecount] = useState(0); // numbers default value is 0, pagination.
    const [page, setPage] = useState(0); // for pagination
    const [size, setSize] = useState(10); // for size, default value 10. page will show 10 products.
    const [products, setProducts] = useState([]);  

    useEffect( () => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [page, size]) // dependencies for if page hit api will change, and size will also change.

    // pagination
    useEffect(()=>{
        fetch('http://localhost:5000/productcount')
        .then(res => res.json())
        .then(data =>{
            const count = data.count; // data = a object in http://localhost:5000/productcount
            const pages = Math.ceil(count/10); // per page would have 10 data or pd
            setPagecount(pages);
        })
    }, [])

    useEffect(() => {
        // console.log('fetch uploaded')
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, [])

    // useEffect(() => {
    //     const storedCart = getStoredCart(); // storedCart ekta object dibe
    //     const savedCart = []; // ei new array tei push korbo
    //     for(const id in storedCart){
    //         const addedProduct = products.find(product => product._id === id);
    //         if(addedProduct){
    //             const quantity = storedCart[id]; // storedCart er moddhei id ase sekhane quantity ase
    //             addedProduct.quantity = quantity; // addedProduct e .quantity ase ar etar value hbe quantity.
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCart(savedCart); // ekhane thk display
        
    // }, [products]) // this useEffect will be depended on [products]
    
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
        <>
        <Banner />
        <div className="shop-container">
            <div className="our-products-title">
                <h1>Featured product</h1>
            </div>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
                {/* pagination scroll */}
                <div className='pagination'>
                    {
                        [...Array(pagecount).keys()]
                        .map(number => <button 
                            className={page === number ? 'selected' : ''}
                            onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }
                    <select onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            {/* <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Order <span style={{fontSize: '18px'}}>⇥</span></button>
                    </Link>
                </Cart>
            </div> */}
        </div>
        </>
    );
};

export default Shop;