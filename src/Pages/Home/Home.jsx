import Banner from "../../Components/Banner/Banner";
import TouristSpots from "../../Components/TouristSpots/TouristSpots";
import { useLoaderData } from "react-router-dom";
import ImageGellary from "../../Components/ImageGellary/ImageGellary";
import ClientReview from "../../Components/ClientReview/ClientReview";

const Home = () => {
    const touristSpots = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <TouristSpots touristSpots={touristSpots}></TouristSpots>
            <ImageGellary></ImageGellary>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;