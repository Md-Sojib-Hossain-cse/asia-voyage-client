import { useLoaderData } from "react-router-dom";

const TouristSpotDetails = () => {
    const loaderData = useLoaderData();
    const {average_cost , country_name , image , location , seasonality , short_description , total_visitors_per_year , tourist_spot_name , travel_time} = loaderData;
    return (
        <div className="max-w-6xl mx-auto mt-4 md:mt-6 lg:mt-8 xl:mt-12">
            <h2 className="text-3xl font-semibold great-vibes text-center">Explore {country_name}: Discover its Wonders</h2>
            <p className="text-base font-medium w-11/12 md:w-10/12 lg:w-2/3 mx-auto text-center">Dive into the beauty and culture of {country_name} with our detailed country guide. Learn about its attractions, cuisine, history, and more, and start planning your next adventure!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg p-4 border mt-8">
                <div className="p-12  md:p-20">
                    <img src={image} alt="" className=" object-cover rounded-lg p-4 -rotate-12 border shadow-lg drop-shadow-lg" />
                </div>
                <div className="text-base font-normal  py-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl great-vibes font-bold mb-8">{tourist_spot_name}</h3>
                        <p className="italic mb-4">{short_description}</p>
                        <p className="mb-1 text-lg">Location : {location} , {country_name}</p>
                        <p className="mb-1 text-lg">Travel Time : {travel_time}day</p>
                        <p className="mb-1 text-lg">Season : {seasonality}</p>
                        <p className="mb-1 text-lg">Visitor Per Year : {total_visitors_per_year}</p>
                    </div>
                    <p>Average Cost : <button className="px-3 py-2 rounded-lg text-lg font-bold text-white bg-[#FF681A]">${average_cost}</button></p>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotDetails;