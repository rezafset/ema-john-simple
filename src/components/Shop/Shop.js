import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import { faAddressCard, faCarSide } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';

const Shop = () => {
    // console.log(fakeData);
    const getTen = fakeData.slice(0,10);
    console.log(getTen);
    const[products, setProducts] = useState(getTen);
    const[cart, setCarts] = useState([]);
    
    const handleProductAdd = (product) =>{
        const newCard = [...cart, product];
        setCarts(newCard);
    }

    return (
        <div className="shop">
            <div className="product-container">
                <ul>
                    {
                        products.map(productItem => <Product handleProductAdd={handleProductAdd} product={productItem}></Product>)
                    }
                </ul>
            </div>
            <div className="shopping-cart">
                <h2>Order Summary</h2>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;