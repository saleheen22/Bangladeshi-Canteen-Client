import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";




export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInEmailPass = (email, password) =>  {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
     const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
     }
    
    const signInGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }



    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, loggedUser=> {
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInEmailPass,
        signInGoogle,
        signInGithub
    }
    

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;