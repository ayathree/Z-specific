import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider =new  GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    // create User
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }

    // signIn user
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // logout
    const logOut=()=>{
        return signOut(auth)
    }
    // google
    const google = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log(currentUser)
        });
        return()=>{
            unSubscribe();
        }
    },[])
    const allInfo = {user,createUser,signIn, logOut, google}
    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children:PropTypes.node
}

export default AuthProvider;