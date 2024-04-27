import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
    const {userLoginStatus , user} = useContext(AuthContext);
    console.log(userLoginStatus)
    console.log(user)
    return (
        <div>
            <Banner></Banner>
            Home
        </div>
    );
};

export default Home;