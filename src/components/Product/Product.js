import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="img-container">
                <img src={img} alt=""/>
            </div>
            <div className="info-container">
                <h4>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <br/>
                <p>${price}</p>
                <br/>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleProductAdd(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
            
        </div>

    );
};

export default Product;