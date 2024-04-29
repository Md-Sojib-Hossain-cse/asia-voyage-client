import Banner from "../../Components/Banner/Banner";
import TouristSpots from "../../Components/TouristSpots/TouristSpots";
import { useLoaderData } from "react-router-dom";
import ImageGellary from "../../Components/ImageGellary/ImageGellary";
import ClientReview from "../../Components/ClientReview/ClientReview";
import CountriesCategory from "../../Components/CountriesCategory/CountriesCategory";

const Home = () => {
    const touristSpots = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <TouristSpots touristSpots={touristSpots}></TouristSpots>
            <CountriesCategory></CountriesCategory>
            <ImageGellary></ImageGellary>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;