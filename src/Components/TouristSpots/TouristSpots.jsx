import PropTypes from "prop-types";
import TouristSpotsCard from "../TouristSpotsCard/TouristSpotsCard";
import { useState } from "react";

const TouristSpots = ({ touristSpots }) => {
    const [viewMore, setViewMore] = useState(false);
    return (
        <div className="max-w-6xl mx-auto mt-6 md:mt-10 lg:mt-12 xl:mt-24">
            <div className="flex justify-between mb-4 lg:mb-8">
                <div className="w-2/3">
                    <h3 className="text-3xl font-semibold mb-3 great-vibes">Explore with Us</h3>
                    <p className="text-lg">Explore our top-rated tour packages, handpicked for unforgettable experiences. Discover iconic destinations and immersive adventures tailored to your wanderlust.</p>
                </div>
                <div className="flex justify-center items-center">
                    {
                        viewMore ?
                            <button onClick={() => setViewMore(!viewMore)} className="text-white bg-[#FF681A] px-3 py-2 rounded-lg">View Less</button> :
                            <button onClick={() => setViewMore(!viewMore)} className="text-white bg-[#FF681A] px-3 py-2 rounded-lg">View More</button>
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    viewMore ?
                        touristSpots.map(touristSpot => <TouristSpotsCard key={touristSpot._id} touristSpot={touristSpot}></TouristSpotsCard>)
                        :
                        touristSpots.slice(0,6).map(touristSpot => <TouristSpotsCard key={touristSpot._id} touristSpot={touristSpot}></TouristSpotsCard>)
                }
            </div>
        </div>
    );
};

TouristSpots.propTypes = {
    touristSpots: PropTypes.array,
}

export default TouristSpots;