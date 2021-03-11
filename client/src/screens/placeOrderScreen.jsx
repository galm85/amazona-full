import React from 'react'
import CheckoutSteps from '../components/checkoutSteps';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const PlaceOrderScreen = (props) => {

    const cart = useSelector(state=>state.cart); 
    if(!cart.paymentMethod){
        props.history.replace('/payment');
    }
    const {shippingAddress} = cart;

    const toPrice = num => Number(num.toFixed(2));

    cart.itemsPrice = toPrice(cart.cartItems.reduce((a,c)=>a+c.qty * c.price,0));
    cart.shippingPrice = toPrice(cart.itemsPrice > 100 ? toPrice(0) : toPrice(10) );
    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;


    const handlePlaceOrder = e=>{

    }

    return (  
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name: </strong>{shippingAddress.fullName} <br/>
                                    <strong>Address: </strong>{shippingAddress.address}, {shippingAddress.city},{' '}
                                     {shippingAddress.postalCode}, {shippingAddress.country}

                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Payment: </strong>{cart.paymentMethod} <br/>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Order Items</h2>
                                <ul>
                                    {cart.cartItems.map(item=>(
                                        <li key={item.product}>
                                            <div className="row">
                                                <div>
                                                    <img className="small" src={item.image} alt={item.name}/>
                                                </div>

                                                <div className="min-30">
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </div>

                                                <div> {item.qty} x ${item.price}  = <strong>${item.qty * item.price}</strong></div>

                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>


                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2>Order Summery</h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Items</div>
                                    <div>$ {cart.itemsPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Shipping</div>
                                    <div>$ {cart.shippingPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Tax</div>
                                    <div>$ {cart.taxPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div><strong>Order Total</strong></div>
                                    <div><strong>$ {cart.totalPrice.toFixed(2)}</strong></div>
                                </div>
                            </li>
                            <li>
                                <button type="button" className="primary block" onClick={handlePlaceOrder} disabled={cart.cartItems.length===0}>Place Order</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PlaceOrderScreen;