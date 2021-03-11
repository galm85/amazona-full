import React,{useState} from 'react'
import CheckoutSteps from '../components/checkoutSteps';
import {useDispatch,useSelector} from 'react-redux';
import {savePaymentMethod} from '../redux/actions/cartActions';

const PaymentMethodScreen = (props) => {

    const shippingAddress = useSelector(state=>state.cart.shippingAddress);
    if(!shippingAddress.address){
        props.history.replace('/shipping');
    }

    const [paymentMethod, setPaymentMethod] = useState("PayPal")

    const dispatch = useDispatch();

    const handleSubmit = e=>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/place-order');
    }


    return ( 
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div>
                        <input type="radio" id="paypal" value="PayPal" name="paymentMethod" checked required onChange={e=>setPaymentMethod(e.target.value)} />
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" id="stripe" value="Stripe" name="paymentMethod" required onChange={e=>setPaymentMethod(e.target.value)} />
                        <label htmlFor="stripe">Stripe</label>
                    </div>
                </div>
                <div>
                    <button type="submit" className="primary">Continue</button>
                </div>
            </form>
        </div>
     );
}
 
export default PaymentMethodScreen;