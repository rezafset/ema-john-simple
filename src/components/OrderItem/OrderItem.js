import React from 'react';
import './OrderItem.css';

const OrderItem = (props) => {
    const {name, seller, price, quantity, key} = props.product;
    return (
        <div className="OrderItem">
            <h4>{name}</h4>
            <p>Seller: {seller}</p>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price}</p>
            <button onClick={()=>props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default OrderItem;