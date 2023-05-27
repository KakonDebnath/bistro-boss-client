import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    // Create User
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Sign in user

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Sign out user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    // update profile
    const updateUserProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {

            console.log("Profile updated!");
        }).catch((error) => {
            // An error occurred
            // ...
            errorMsg(error.message);
        });
    }
    // observer for user is logged in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createNewUser,
        logInUser,
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