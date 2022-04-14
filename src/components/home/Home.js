import React from 'react';
import UseFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user}=UseFirebase()
    return (
        <div>
            <h2>This is home</h2>
            <p>Current UserName is:{user?user.displayName :'Nobody'}</p>
        </div>
    );
};

export default Home;