import PropTypes from "prop-types";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config"
import { createContext, useEffect, useState } from "react";


export  const AuthContext = createContext();

//firebase auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    //create User Using Email Password
    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }

    //login with email password 
    const loginUser = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }

    //google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth , googleProvider);
    }


    //facebook login
    const facebookLogin = () => {
        setLoading(true);
        return signInWithPopup(auth , facebookProvider);
    }

    //logout user
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }


    //auth state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    } , [])



    const userInfo = {
        createUser,
        loginUser,
        googleLogin,
        facebookLogin,
        logoutUser,
        user , 
        setUser,
        loading,
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;