import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import UseCart from '../Hooks/UseCart';
import Product from '../Product/Product';
import './Shop.css'
import Banner from '../Banner/Banner';
import useGetData from '../../custom-hooks/useGetData';
import ProductList from '../UI/ProductList';
import { Col, Container, Row } from 'reactstrap';

const Shop = () => {
    const {data: output} = useGetData('products');
    const [mobileProducts, setMobileProducts] = useState([]);
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [eyeglassesPd, seteyeGlassesPd] = useState([]);
    const [capProducts, setCapProducts] = useState([]);
    const [cart, setCart] = UseCart(); // the next page will not reset added prods
    const [products, setProducts] = useState([]);  

    // pagination..

    useEffect(() => {
        // console.log('fetch uploaded')
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, [])

    useEffect(() => {
        const filteredTrendingProducts = output.filter(
            item => item.category === 'watches'
        )

        const filteredMobileProducts = output.filter(
            item => item.category === 'smartphones'
        )

        const filteredEyeGlassesPd = output.filter(
            item => item.category === 'eyeglasses'
        )

        const filteredCapProducts = output.filter(
            item => item.category === 'Cap'
        )

        setTrendingProducts(filteredTrendingProducts);
        setMobileProducts(filteredMobileProducts);
        seteyeGlassesPd(filteredEyeGlassesPd);
        setCapProducts(filteredCapProducts);

    }, [output]);

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
                <h1 className="mt-5 mb-3">Featured product</h1>
                <p>Crafted for Your Delight.</p>
            </div>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>
                    )
                }
            </div>
            <section>
            <div className="our-products-title">
                <h1 className="mt-5 mb-3">Trending products</h1>
                <p>Trending Must-Haves Here!</p>
            </div>
                <div className="products-container">
                    <ProductList data={trendingProducts} />
                </div>
            </section>
            <section>
            <div className="our-products-title">
                <h1 className="mt-5 mb-3">New arrivals</h1>
                <p>Introducing our new arrivals</p>
            </div>
                <div className="products-container">
                    <ProductList data={mobileProducts} />
                    <ProductList data={eyeglassesPd} />
                </div>
            </section>
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