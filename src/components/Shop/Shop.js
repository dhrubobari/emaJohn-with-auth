import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import UseCart from '../Hooks/UseCart';
import Product from '../Product/Product';
import './Shop.css'
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import useGetData from '../../custom-hooks/useGetData';
import ProductList from '../UI/ProductList';

const Shop = () => {
    const {data: output} = useGetData('products');
    const [mobileProducts, setMobileProducts] = useState([]);
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [eyeglassesPd, seteyeGlassesPd] = useState([]);
    const [capProducts, setCapProducts] = useState([]);
    const [cart, setCart] = UseCart();
    const [products, setProducts] = useState([]);  
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        fetch(`http://localhost:5002/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, [page, size]);
    
    
    useEffect(() => {
        // console.log('fetch uploaded')
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5002/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count/10);
                setPageCount(pages);
            })
            .catch(error => {
                console.error('Error fetching product count:', error);
                setPageCount(1);
            });
    }, []);
       

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
            <div className="pagination m-5">
                {
                    [...Array(pageCount).keys()].map(number => <button 
                        className={page === number ? 'selected':''}
                        onClick={() => setPage(number)}>{number + 1}</button>)
                }
                <select onChange={e => setSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
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
            <Footer />
        </div>
        </>
    );
};

export default Shop;