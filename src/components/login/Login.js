import React from 'react';
import './Login.css';
import UseFirebase from '../../hooks/useFirebase'


const Login = () => {
    const{signInWithGoogle}= UseFirebase()
    return (
        <div>
             <h2>Please login</h2>
            <div style={{margin:'20px'}}>
            <button onClick={signInWithGoogle}>Google Sign in</button>
            </div>
            
            <form action="">
                
                <input type="email" placeholder='your mail'/>
                <br />
                <input type="password" name="" id="" placeholder='password'/>
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Login;