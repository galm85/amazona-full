import React,{useState} from 'react'
import {Link} from 'react-router-dom';


const SigninScreen = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

    }

    return ( 
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <h1>Sign in</h1>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required onChange={e=>setPassword(e.target.value)}/>
                </div>
                <div>
                    <button className="primary" type="submit">Sign In</button>
                </div>
                <div>
                    New Customer? {' '} 
                    <Link to="/register">Create your account</Link>
                </div>
            </form>
        </div>
     );
}
 
export default SigninScreen;