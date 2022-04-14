import { useEffect, useState } from "react";
import {  getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init'
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

const UseFirebase=()=>{
    const[user,setUser]=useState({})
    useEffect( ()=>{

    },[])
    const signInWithGoogle=()=>{
        console.log('sign in with google');
        signInWithPopup(auth,provider)
        .then(result=>{
            const user=result.user;
            console.log(user)
            setUser(user)
        })
    }
    const handleSignOut=()=>{
        signOut(auth)
        .then( ()=>{})
    }
  //  return[user,setUser]
  useEffect( ()=>{
      onAuthStateChanged(auth, user =>{
          setUser(user)
      })
  },[])
  return{user,signInWithGoogle,handleSignOut}
}
export default UseFirebase;