import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import "./TouristSpotsCard.css"
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const TouristSpotsCard = ({ touristSpot }) => {
    const { _id, image, travel_time, tourist_spot_name, short_description, average_cost } = touristSpot;
    return (
        <div id="touristCard" className="rounded-lg">
            <div className="h-64 w-full">
                <img src={image} alt="card-image" className="h-full w-full rounded-t-lg" />
            </div>
            <div className="p-4 bg-gray-200 shadow-lg drop-shadow-lg backdrop-blur-sm rounded-b-lg">
                <div data-aos="zoom-in"
                    data-aos-delay="50">
                    <p className="relative flex justify-center items-center gap-2 bg-[#FF681A] w-24 rounded-sm text-center text-lg font-bold text-white -top-6"> <IoTimeOutline />{travel_time}</p>
                    <h6 className="text-2xl font-medium great-vibes mb-1">{tourist_spot_name}</h6>
                    <p className="text-base font-normal mb-4">{short_description}</p>
                    <div className="flex justify-between items-center">
                        <Link to={`/touristSpotDetails/${_id}`}>
                            <button id="cardButton" className="border border-[#FF681A]  text-[#FF681A] font-bold px-3 py-2 rounded-lg flex gap-2 justify-center items-center">View Details <FaArrowRight /></button></Link>
                        <div className="font-bold text-xl">
                            <p>From</p>
                            <p className="text-[#FF681A]">{average_cost} <span className="text-sm text-[#131313]">per person</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

TouristSpotsCard.propTypes = {
    touristSpot: PropTypes.object,
}

export default TouristSpotsCard;