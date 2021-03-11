import React,{useState,useEffect} from 'react'
import CheckoutSteps from '../components/checkoutSteps';
import {useDispatch,useSelector} from 'react-redux';
import {saveShippingAddress } from '../redux/actions/cartActions';

export default function ShippingAddressScreen(props) {


    /// check if user is logged in
    const userSignin = useSelector(state => state.userSignin);
    const{userInfo} = userSignin;
    useEffect(()=>{
        if(!userInfo){
            props.history.replace('/signin');
        }
    },[userInfo]);


    // get shipping address data if exist from local storage
    const shippingAddress = useSelector(state => state.cart.shippingAddress);



    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const dispatch = useDispatch();


    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(saveShippingAddress({fullName,address,city,postalCode,country}));
        props.history.push('/payment');
    }




    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" value={fullName} onChange={e=>setFullName(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" value={address} onChange={e=>setAddress(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" value={city} onChange={e=>setCity(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="postalCode">Postal Code:</label>
                    <input type="text" id="postalCode" value={postalCode} onChange={e=>setPostalCode(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="country">Country:</label>
                    <input type="text" id="country" value={country} onChange={e=>setCountry(e.target.value)} required/>
                </div>

                <div>
                    <label/>
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}
