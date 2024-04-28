import { useLoaderData } from "react-router-dom";

const SingleSpotDetails = () => {
    const singleTouristSpotData = useLoaderData();
    const { userName, userEmail, userImage, touristSpotName, countryName, location, photoUrl, averageCost, seasonality, travelTime, visitorPerYear, shortDescription, } = singleTouristSpotData;


    return (
        <div className="max-w-6xl mx-auto mt-4 md:mt-6 lg:mt-8 xl:mt-12">
            <h2 className="text-3xl font-semibold text-center great-vibes mb-3">Explore {touristSpotName}</h2>
            <p className="text-base font-normal text-center w-11/12 md:w-10/12 lg:w-3/4 mx-auto">Discover the wonders of {touristSpotName}, a must-visit destination recommended by travelers. Dive into its beauty and learn more below.</p>
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

export default SingleSpotDetails;