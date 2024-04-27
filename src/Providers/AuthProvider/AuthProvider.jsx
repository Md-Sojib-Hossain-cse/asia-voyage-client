import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config"
import { createContext } from "react";


export  const AuthContext = createContext();

//firebase auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {


    //create User Using Email Password
    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    }


    const userInfo = {
        createUser,
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