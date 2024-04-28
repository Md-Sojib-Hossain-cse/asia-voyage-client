import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Banner from "../../Components/Banner/Banner";
import TouristSpots from "../../Components/TouristSpots/TouristSpots";
import { useLoaderData } from "react-router-dom";
import ImageGellary from "../../Components/ImageGellary/ImageGellary";

const Home = () => {
    const {userLoginStatus , user} = useContext(AuthContext);
    const touristSpots = useLoaderData();
    console.log(userLoginStatus)
    console.log(user)
    return (
        <div>
            <Banner></Banner>
            <TouristSpots touristSpots={touristSpots}></TouristSpots>
            <ImageGellary></ImageGellary>
        </div>
    );
};

export default Home;