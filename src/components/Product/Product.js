import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import UseFirebase from '../../hooks/useFirebase';

const auth = getAuth(app)
const Product = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>Who is there?</h2>
            <h1>{user? user.displayName: 'Nobody'}</h1>
        </div>
    );
};

export default Product;