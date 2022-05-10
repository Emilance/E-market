import React, { useEffect } from 'react';
import axios from 'axios';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { ImPriceTag }  from 'react-icons/im'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/action/ProductAction';
import './ProductDetails.css'

const ProductDetails = () => {
    const product =useSelector((state) => state.product)
   const {productId} =useParams();
   const dispatch =useDispatch()
   const {category, id, title, rating, price,description, image} =product


  const  getProductDetails = async () =>{
    const  details =  await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err =>{
        console.log( "Err  ", err)
    })
    dispatch(selectedProduct(details.data))
    
  }

  useEffect(()=>{
      if(productId && productId !==""){
      getProductDetails()
      return () =>{
        dispatch(removeSelectedProduct())
      }
      }
  }, [productId])
    return ( 
        <div className='sProductcontainer'>
           {Object.keys(product).length === 0 ? (
               <div> Loading...</div>
            ) : (

          
        <div className='selectedProduct'>
            <div className='ImgContainer'>
            <img src={image} className="img" alt="..."/>
            </div>
            <div className='productDetails'>
                <h1 className='title'>{title}</h1>
                <div className='priceLogo'>
                     <p><ImPriceTag size='18px' className='icon'/>${price}</p>
                </div>
                <p className='category'><span>CATEGORY:  </span>{category}</p>
                <p className='rating' >Rating : {rating.rate}</p>
                <p className='description' >{description}</p>
                
            <button className="button">ADD TO CART <AiOutlineShoppingCart size='16px' className='icon'/> </button>
            </div>

        </div>
            )}

    </div>
     );
}
 
export default ProductDetails;