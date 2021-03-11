import {BrowserRouter,Route} from 'react-router-dom';
import HomeScreen from './screens/homeScreen';
import ProductScreen from './screens/productScreen';
import CartScreen from './screens/cartScreen';
import {Link}  from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import SigninScreen from './screens/signinScreen';
import { signout } from './redux/actions/userActions';
import RegisterScreen from './screens/registerScreen';
import shippingAddressScreen from './screens/shippingAddressScreen';
import PaymentMethodScreen from './screens/paymentMethodScreen';


function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector(state =>state.userSignin);
  const {userInfo} = userSignin;
  const dispatch=useDispatch()


  const signoutHandler = (e)=>{
    dispatch(signout());
  }


  return (
    <BrowserRouter>
        <div className="grid-container">
            
            <header className="row">
                <div>
                    <Link class="brand" to="/">amazona</Link>
                </div>
                <div>
                    <Link to="/cart">Cart {cartItems.length>0 && (<span className="badge">{cartItems.length}</span>)}</Link>
                    
                    {userInfo ? (
                      <div className="dropdown">
                        <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i>{' '}</Link>
                        <ul className="dropdown-content">
                            <Link to="#signout" onClick={signoutHandler}>SignOut</Link>
                        </ul>

                      </div>

                    ) : (
                      <Link to="/signin">Sign In</Link>

                    )}
                </div>
            </header>
        
            <main>
              <Route exact path="/" component={HomeScreen}  />
              <Route path="/product/:id" component={ProductScreen}  />
              <Route path="/cart/:productId?" component={CartScreen}  />
              <Route path="/signin" component={SigninScreen}  />
              <Route path="/register" component={RegisterScreen}  />
              <Route path="/shipping" component={shippingAddressScreen}  />
              <Route path="/payment" component={PaymentMethodScreen}  />
              
            </main>
        
          <footer className="row center">
              all rights reserved
          </footer>
          
        </div>
  
  </BrowserRouter>
  );
}

export default App;
