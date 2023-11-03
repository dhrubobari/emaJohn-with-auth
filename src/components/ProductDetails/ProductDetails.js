import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { db } from '../../firebase.init';
import { collection } from "firebase/firestore";
import ProductDetailsCard from './ProductDetailsPage/ProductDetailsCard';

const ProductDetails = () => {
  const [item, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = collection(db, 'products')// assuming 'products' is the root node in your database

      docRef.on((snapshot) => {
        const data = snapshot.val();
        // Assuming 'data' is an array of products
        // You can process the array of products here or set the state directly if it's an object
        setProduct(data);
      });
    };

    fetchData();
  }, []);

   return (
    <div>
      <h1>Product Details</h1>
      <ProductDetailsCard item={item} />
    </div>
  )
}

export default ProductDetails