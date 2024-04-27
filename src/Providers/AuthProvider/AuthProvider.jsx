import PropTypes from "prop-types";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config"
import { createContext, useEffect, useState } from "react";


export  const AuthContext = createContext();

//firebase auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null);
    const [userLoginStatus , setUserLoginStates] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    //create User Using Email Password
    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    }

    //login with email password 
    const loginUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password);
    }

    //google login
    const googleLogin = () => {
        return signInWithPopup(auth , googleProvider);
    }


    //facebook login
    const facebookLogin = () => {
        return signInWithPopup(auth , facebookProvider);
    }

    //logout user
    const logoutUser = () => {
        return signOut(auth);
    }


    //auth state
    useEffect(() => {
        onAuthStateChanged(auth , currentUser => {
            if(currentUser){
                setUserLoginStates(true);
            }
            else{
                setUserLoginStates(false);
            }
        })
    } , [])



    const userInfo = {
        createUser,
        loginUser,
        googleLogin,
        facebookLogin,
        logoutUser,
        userLoginStatus,
        user , 
        setUser,
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