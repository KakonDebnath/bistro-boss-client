import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const googleProvider = new GoogleAuthProvider();

    // Create User
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Sign in user

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign in with google pop up
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // Sign out user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    // update profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    // observer for user is logged in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            // jwt token get adn set
            if (currentUser && currentUser.email) {
                axios.post("http://localhost:5000/jwt", { email: currentUser?.email }).then(data => {
                    // console.log(data.data.token);
                    localStorage.setItem('access_token', data.data.token);
                    // setLoading(false);
                })
            } else {
                setUser(null);
                localStorage.removeItem('access_token');
                setLoading(true);
            }

        });
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        setLoading,
        createNewUser,
        logInUser,
        googleSignIn,
        logOutUser,
        updateUserProfile,
        successMsg,
        errorMsg,
        setSuccessMsg,
        setErrorMsg,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;