import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Home = () => {
    const {userLoginStatus , user} = useContext(AuthContext);
    console.log(userLoginStatus)
    console.log(user)
    return (
        <div>
            Home
        </div>
    );
};

export default Home;