import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";

const UseCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    const keys = Object.keys(storedCart);
    console.log(keys);
    // sending to backend
    fetch('http://localhost:5000/productbykeys', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(keys) // sending keys
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products);

        for (const id in storedCart) {
          const addedProduct = products.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, []);

  return [cart, setCart];
};

export default UseCart;