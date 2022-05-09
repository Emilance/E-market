import React from 'react';
import { useSelector } from 'react-redux';
import './ProductCollection.css'

const ProductComponent = () => {
        const products = useSelector( (state) => state.allProducts)
       const { id, title, category} =products;


    return ( 
              <div className='ProductComponent'>
                  <h1 className='heading'> ALL PRODUCTS</h1>
                  <div className='productsList' >
                  <div className="card" >
                       <img src="..."  className="card-img" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn">Go somewhere</a>
                    </div>
                   </div>
                  </div>
              </div>
     );
}
 
export default ProductComponent;