import React, { createContext, useEffect, useContext, useState } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    // logging in user change the auth state of system it provides us current user.
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../config/firebase';

const UserAuthContext = createContext()
console.log(UserAuthContext, "abcd")

export const UserAuthContextProvider = ({ children }) => {

    const [user, setUser] = useState("");
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // firebase specficy particular use logged in
    // when component gets mounts either the auth state or current user will be null or some user.
    useEffect(() => {
        console.log(auth, "ancd")
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser, "user is --->")
            setUser(currentUser)
        })
        return () => { unsubscribe() }
    }, [])
    console.log(children, "acd")
    
    return (
        <UserAuthContext.Provider value={{ user, signUp, logIn, }}>
            {children}
        </UserAuthContext.Provider>
    )
}


// custom hook to use context

export function userAuth() {
    return useContext(UserAuthContext)
}