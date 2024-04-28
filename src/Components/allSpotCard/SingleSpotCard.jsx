import PropTypes from "prop-types"
import { FaArrowRight } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SingleSpotCard = ({ touristSpot }) => {
    const {_id ,  photoUrl, touristSpotName, averageCost, visitorPerYear, travelTime, seasonality } = touristSpot;

    return (
        <div id="touristCard" className="rounded-lg">
            <div className="h-64 w-full">
                <img src={photoUrl} alt="card-image" className="h-full w-full rounded-t-lg" />
            </div>
            <div className="p-4 bg-gray-200 shadow-lg drop-shadow-lg backdrop-blur-sm rounded-b-lg">
                <div data-aos="zoom-in"
                    data-aos-delay="50">
                    <p className="relative flex justify-center items-center gap-2 bg-[#FF681A] w-24 rounded-sm text-center text-lg font-bold text-white -top-6"> <IoTimeOutline />{travelTime} day</p>
                    <h6 className=" text-base font-medium mb-1">Place Name : <span className="great-vibes text-2xl">{touristSpotName}</span></h6>
                    <p className="text-base font-normal mb-4">Seasonality : {seasonality}</p>
                    <p className="text-base font-normal mb-4">Visitors Per Year : <span className="font-bold">{visitorPerYear}</span></p>
                    <div className="flex justify-between items-center">
                        <Link to={`/allSpot/${_id}`}>
                        <button id="cardButton" className="border border-[#FF681A]  text-[#FF681A] font-bold px-3 py-2 rounded-lg flex gap-2 justify-center items-center">View Details <FaArrowRight /></button>
                        </Link>
                        <div className="font-bold text-xl">
                            <p>From</p>
                            <p className="text-[#FF681A]">${averageCost} <span className="text-sm text-[#131313]">per person</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleSpotCard.propTypes = {
    touristSpot: PropTypes.object,
}

export default SingleSpotCard;