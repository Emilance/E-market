import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ProductCollection.css'
import { setProduct } from '../redux/action/ProductAction';

import axios, { Axios } from 'axios';
import ProductComponent from './ProductComponents';

const ProductCollection = () => {
       const products =useSelector((state) => state)
       const dispatch = useDispatch()
       const  getProducts = async() =>{
       const  response =await axios.get('https://fakestoreapi.com/products').catch(err => {
           console.log(err)
         })
         dispatch(setProduct(response.data))
       }

useEffect( () => {
  getProducts()
}, [])


              return ( 
              <div className='productCollection'>
                    <h1 className='heading'> ALL PRODUCTS</h1>
                <ProductComponent/>
              </div>
     );
}
 
export default ProductCollection;