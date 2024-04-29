import PropTypes from "prop-types";

const SingleSpotBasedOnCountry = ({ countryDetails }) => {
    const { userName, userEmail, userImage, touristSpotName, countryName, location, photoUrl, averageCost, seasonality, travelTime, visitorPerYear, shortDescription, } = countryDetails;

    return (
        <div>
            <div className="mt-6 lg:mt-10 border-t pt-4 flex gap-3 items-center">
                <div>
                    <img src={userImage || "https://i.ibb.co/sbkyhCp/blank-profile.png"} alt="" className="h-12 w-12 rounded-full" />
                </div>
                <div className="border-b border-r pr-3 pb-1">
                    <h6 className="text-[#13131366]">added by : <span className="font-semibold text-[#131313]">{userName}</span></h6>
                    <p className="text-[#13131366]">{userEmail}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg p-4 border">
                <div className="p-12  md:p-20">
                    <img src={photoUrl} alt="" className=" object-cover rounded-lg p-4 -rotate-12 border shadow-lg drop-shadow-lg" />
                </div>
                <div className="text-base font-normal text-[#131313] py-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl great-vibes font-bold mb-8">{touristSpotName}</h3>
                        <p className="italic mb-4">{shortDescription}</p>
                        <p className="mb-1 text-lg">Location : {location} , {countryName}</p>
                        <p className="mb-1 text-lg">Travel Time : {travelTime}day</p>
                        <p className="mb-1 text-lg">Season : {seasonality}</p>
                        <p className="mb-1 text-lg">Visitor Per Year : {visitorPerYear}</p>
                    </div>
                    <p>Average Cost : <button className="px-3 py-2 rounded-lg text-lg font-bold text-white bg-[#FF681A]">${averageCost}</button></p>
                </div>
            </div>
        </div>
    );
};

SingleSpotBasedOnCountry.propTypes = {
    countryDetails: PropTypes.object
}

export default SingleSpotBasedOnCountry;