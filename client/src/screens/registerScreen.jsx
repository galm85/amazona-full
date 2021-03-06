import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { register } from '../redux/actions/userActions';
import LoadingBox from '../components/loadingBox';
import MessageBox from '../components/messageBox';

const RegisterScreen = (props) => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const userRegister = useSelector(state =>state.userRegister);
    const {userInfo,loading,error} = userRegister;

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Password and Confirm Password are not match');
        }else{
            dispatch(register(name,email,password));

        }

    }

    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    },[props.history,redirect,userInfo]);

    return ( 
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <h1>Create an Account</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required onChange={e=>setName(e.target.value)}/>
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
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" required onChange={e=>setConfirmPassword(e.target.value)}/>
                </div>
                <div>
                    <button className="primary" type="submit">Register</button>
                </div>
                <div>
                    Already have an account? {' '} 
                    <Link to={`/signin?redirect=${redirect}`}>Sign in</Link>
                </div>
            </form>
        </div>
     );
}
 
export default RegisterScreen;