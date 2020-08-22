import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'

const Shop = () => {
    // console.log(fakeData);
    const getTen = fakeData.slice(0,10);
    console.log(getTen);
    const[products, setProducts] = useState(getTen);
    return (
        <div className="shop">
            <div className="product-container">
                <ul>
                    {
                        products.map(product => <li>{product.name}</li>)
                    }
                </ul>
            </div>
            <div className="shopping-cart">
                <h2>Shopping Cart</h2>
            </div>
        </div>
    );
};

export default Shop;