import React from 'react';
import UseFirebase from '../../hooks/useFirebase';

const Product = () => {
    const {user} = UseFirebase()
    return (
        <div>
            <h2>Who is there?</h2>
            <h1>{user? user.displayName: 'Nobody'}</h1>
        </div>
    );
};

export default Product;