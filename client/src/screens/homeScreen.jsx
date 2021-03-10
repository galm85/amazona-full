import React,{useState,useEffect} from 'react'
import Product from '../components/Product';
import MessageBox from '../components/messageBox';
import LoadingBox from '../components/loadingBox';
import {useSelector,useDispatch} from 'react-redux';
import { listProducts } from '../redux/actions/productActions';


const HomeScreen = () => {

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList);
    const {loading,error,products} = productList;
    
    useEffect(()=>{
        dispatch(listProducts());
    },[])

    return ( 

        <div>
            {loading ? (<LoadingBox></LoadingBox>) : error ? (<MessageBox variant='danger '>{error}</MessageBox>) :(
                <div className="row center">
                        {products.map(product =>(
                            <Product key={product.id} product={product}/>
                            ))}
                </div>
            )}
        </div>
     );
}
 
export default HomeScreen;