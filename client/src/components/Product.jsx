import React from 'react'
import Rating from './rating'
import {Link} from 'react-router-dom';

const Product = ({product}) => {
    return ( 
        <div  className="card">
                    
                    <Link to={`/product/${product.id}`}>
                        <img class="medium" src={product.image } alt={product.name}/>
                    </Link>
                    
                    <div className="card-body">
                        <Link to={`/product/${product.id}`}>
                            <h2>{product.name}</h2>
                        </Link>
                        
                        <Rating rating={product.rating} numReview={product.numReview}/>

                        <div className="price"> ${product.price}</div>
                    </div>
                    </div>
     );
}
 
export default Product;
