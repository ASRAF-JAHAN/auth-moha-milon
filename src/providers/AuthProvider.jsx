import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email,password);
  }

  const signInUser = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const signInWithGoogle = ()=>{
    setLoading(true)
    return  signInWithPopup(auth, googleProvider)
  }
 

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }
  // observe auth state change

    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,currentUser=>{
       console.log('observing value of the current user ',currentUser);
          setUser(currentUser);
          setLoading(false);
      });
      return ()=>{
        unSubscribe();
      }
    },[])
    const authInfo = {
      user,
       createUser,
       signInUser,
       logOut,loading,
       signInWithGoogle }
    return (
       <AuthContext.Provider value={authInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children:PropTypes.node
}

/* *
*1.create context
2. set provider with value
3. use the Auth provider in the main.jsx file
4. access children in the AuthProvider component  as children and use it in the middle of the provider 
**
 */