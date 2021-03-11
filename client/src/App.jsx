import {BrowserRouter,Route} from 'react-router-dom';
import HomeScreen from './screens/homeScreen';
import ProductScreen from './screens/productScreen';
import CartScreen from './screens/cartScreen';
import {Link}  from 'react-router-dom';
import {useSelector} from 'react-redux';
import SigninScreen from './screens/signinScreen';


function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  return (
    <BrowserRouter>
        <div className="grid-container">
            
            <header className="row">
                <div>
                    <Link class="brand" to="/">amazona</Link>
                </div>
                <div>
                    <Link to="/cart">Cart {cartItems.length>0 && (<span className="badge">{cartItems.length}</span>)}</Link>
                    <Link to="/signin">Sign In</Link>
                </div>
            </header>
        
            <main>
              <Route exact path="/" component={HomeScreen}  />
              <Route path="/product/:id" component={ProductScreen}  />
              <Route path="/cart/:productId?" component={CartScreen}  />
              <Route path="/signin" component={SigninScreen}  />
              
            </main>
        
          <footer className="row center">
              all rights reserved
          </footer>
          
        </div>
  
  </BrowserRouter>
  );
}

export default App;
