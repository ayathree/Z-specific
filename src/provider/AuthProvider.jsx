import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider =new  GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true)
    const[reload, setReload]=useState(false)
    // create User
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    // signIn user
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // logout
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    // google
    const google = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
    // github
    const github=()=>{
        return signInWithPopup(auth, githubProvider)
    }

   

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        });
        return()=>{
            unSubscribe();
        }
    },[reload])
    const allInfo = {user,createUser,signIn, logOut, google, github, loading, setReload }
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