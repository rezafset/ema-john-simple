import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.cart;
    // console.log('Cart', cart);

    const total = cart.reduce((total , prd) => total + prd.price , 0)
    console.log(total);

    const tax = total/10;

    let shipping = 0;
    if(total > 40){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 5.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const formatNumber = num =>{
        const number = Number(num.toFixed(2));
        return number;
    }

    return (
        <div className="cart">
            <h3>Items Ordered: {cart.length} </h3>
            <p>Product Price: {formatNumber(total)} </p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax: {formatNumber(tax)} </p>
            <p>Total Price: {formatNumber(total + tax + shipping)}</p>
            <button><FontAwesomeIcon icon={faShoppingCart} />Checkout</button>
        </div>
    );
};

export default Cart;