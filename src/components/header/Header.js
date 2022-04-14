import React from 'react';
import { Link } from 'react-router-dom';
import UseFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user,handleSignOut}=UseFirebase();
    return (
        <div className='header'>
            <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/Orders'>Orders</Link>
            <Link to='/Register'>Register</Link>
            
            <span>{user?.displayName && user.displayName}</span>
            {
               user?.uid ?  <button onClick={handleSignOut}>Sign out</button>  : <Link to='/login'>Login</Link>
            }
            
            </nav>
           
        </div>
    );
};

export default Header;