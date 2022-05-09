import React from 'react';
import { useSelector } from 'react-redux';
import './ProductCollection.css'
import ProductComponent from './ProductComponents';

const ProductCollection = () => {
       const products =useSelector((state) => state)
              console.log(products)
    return ( 
              <div className='ProductCollection'>
                <ProductComponent/>
              </div>
     );
}
 
export default ProductCollection;