import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <div style={{margin:'20px'}}>
            <button>Google Sign in</button>
            </div>
            
            <form action="">
                <input type="text" placeholder='your name' />
                <br />
                <input type="email" placeholder='your mail'/>
                <br />
                <input type="password" name="" id="" placeholder='password'/>
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;