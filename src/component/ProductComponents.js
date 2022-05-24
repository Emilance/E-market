import React from 'react';
import { useSelector } from 'react-redux';
import './ProductCollection.css'
import { Link } from 'react-router-dom';

const ProductComponent = () => {
        const products = useSelector( (state) => state.allProducts.products)
        const  list =  products.map(  (product )=> {
              const{category, description, id, image, price, title}  = product
            return(
                
                    <div key={id} className='productsList' >
                    <div className="card" >
                         <img src={image} className="card-img" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">${price}</p>
                        <Link  className='Pbutton'  to ={`/product/${id}`}>Check Product</Link>

                      </div>
                     </div>
                    </div>
                
            )
           })


    return ( 
      <div className='ProductComponent'>
          {list}
      </div>
     );
}
 
export default ProductComponent;