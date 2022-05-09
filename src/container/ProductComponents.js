import React from 'react';
import { useSelector } from 'react-redux';
import './ProductCollection.css'

const ProductComponent = () => {
        const products = useSelector( (state) => state.allProducts.products)
      console.log(products)
        const  list =  products.map(  (product )=> {
              const{category, description, id, image, price, title}  = product
            return(
                
                    <div className='productsList' >
                    <div className="card" >
                         <img src={image} className="card-img" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">${price}</p>
                        <a href="#" className="btn">Go somewhere</a>
                      </div>
                     </div>
                    </div>
                
            )
           })
       console.log(products)


    return ( 
      <div className='ProductComponent'>
          {list}
      </div>
     );
}
 
export default ProductComponent;