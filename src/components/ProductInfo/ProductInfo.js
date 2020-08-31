import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductInfo = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            <h2>{productKey} Information Coming Soon........</h2>
            <Product showCartAdd ={false} product={product}></Product>
        </div>
    );
};

export default ProductInfo;