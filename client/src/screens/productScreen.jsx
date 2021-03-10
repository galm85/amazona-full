import React,{useEffect,useState} from 'react'
import Rating from '../components/rating';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import MessageBox from "../components/messageBox";
import LoadingBox from "../components/loadingBox";
import {detailsProduct} from '../redux/actions/productActions';

const ProductScreen = (props) => {

    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const {product,error,loading} = productDetails;
    const productId = props.match.params.id;
    const [qty,setQty] = useState(1);

    useEffect(()=>{
        dispatch(detailsProduct(productId));
    },[dispatch,productId])
    

    const addToCartHandler = ()=>{
        props.history.push(`/cart/${productId}?qty=${qty}`);
    }

    return ( 

        <div>
            {loading ? (<LoadingBox></LoadingBox>) : error ? (<MessageBox variant='danger '>{error}</MessageBox>) :(
                
            <div>
                <Link to="/">Back to results</Link>
                <div className="row top">
                    <div className="col-2">
                        <img className="large" src={product.image} alt={product.name}/>   
                    </div>
           
                    <div className="col-1">
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                            <li>
                                <Rating rating={product.rating} numReview={product.numReview}/>
                            </li>
                            <li>
                                Price: ${product.price}
                            </li>
                            <li>
                                Description:
                                <p>{product.description}</p>
                            </li>
                        </ul>
                    </div>
           
                        <div className="col-1">
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div>Price</div>
                                            <div className="price"> ${product.price}</div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="row">
                                            <div>Status</div>
                                            <div> 
                                                {product.countInStock >0 ? (<span className="success"> In Stock</span>):(<span className="danger"> Not Available</span>)}
                                            </div>
                                        </div>
                                    </li>

                                    {product.countInStock >0 && (
                                        <>
                                        <div className="row">
                                            <div>Qty:</div>
                                            <div>
                                                <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                                                    {
                                                        [...Array(product.countInStock).keys()].map(x=>(
                                                            <option key={x+1} value={x+1}>{x+1}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <li>
                                            <button onClick={addToCartHandler} className="primary block">Add To Cart</button>
                                        </li>

                                        </>
                                        )}
                                </ul>
                            </div>
                        </div>
       
                </div>
            </div>

            )}
        </div>




        
     );
}
 
export default ProductScreen;