import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager.js';
import Cart from '../Cart/Cart';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    // console.log(fakeData);
    const getTen = fakeData.slice(0,10);
    console.log(getTen);
    const[products, setProducts] = useState(getTen);
    const[cart, setCarts] = useState([]);

    useEffect(()=> {
        const saveCart = getDatabaseCart();
        const productKey = Object.keys(saveCart)
        console.log(productKey);
        const productItem = productKey.map(key =>{
            const product = fakeData.find(pd=> pd.key === key);
            // console.log(product);
            product.quantity = saveCart[key];
            return product;
        })
        setCarts(productItem);
        // console.log(productItem);
    }, [])
    
    const handleProductAdd = (product) =>{
        // const toBeAdded = product.key;
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCarts(newCart);
        // const newCard = [...cart, product];
        // setCarts(newCard);
        // const sameProduct = newCard.filter(pd => pd.key === product.key);
        // const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="shop">
            <div className="product-container">
                <ul>
                    {
                        products.map(productItem => <Product showCartAdd={true} handleProductAdd={handleProductAdd} product={productItem}></Product>)
                    }
                </ul>
            </div>
            <div className="shopping-cart">
                <h2>Order Summary</h2>
                <Cart cart={cart}>
                    <Link to="/order">
                        <button><FontAwesomeIcon icon={faShoppingCart} />Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;