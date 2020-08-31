import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import OrderItem from '../OrderItem/OrderItem';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import like from '../../images/giphy.gif';

const Order = () => {
    const [cart , setCart] = useState([]);

    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    
    const removeProduct = (productKey)=>{
        console.log("Clicked Remove", productKey);
        const newCart = cart.filter(pd=> pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProduct = productKeys.map( key=>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cartProduct);
        console.log(cartProduct);
    }, [])

    let thankYou;

    if(orderPlaced){
        thankYou = <img src={like} alt=""/>
    }

    return (
        <div className="shop">
            <div className="product-container">
                {
                    cart.map(pd=><OrderItem removeProduct={removeProduct} key={pd.key} product={pd}></OrderItem>)
                }
                {thankYou}
            </div>
            <div className="shopping-cart">
                <h2>Order Summary</h2>
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} ><FontAwesomeIcon icon={faShoppingCart} />Placed Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;