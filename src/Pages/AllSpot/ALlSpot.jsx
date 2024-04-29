import { Link, useLoaderData } from "react-router-dom";
import SingleSpotCard from "../../Components/allSpotCard/SingleSpotCard";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";

const ALlSpot = () => {
    const loadedAllSpots = useLoaderData();
    const [sortedArray, setSortedArray] = useState(loadedAllSpots);


    const handleSortingAscending = () => {
        const sortedAllSpots = [...loadedAllSpots].sort((a, b) => a.averageCost - b.averageCost);
        setSortedArray(sortedAllSpots);
    }
    const handleSortingDescending = () => {
        const sortedAllSpotsDescending = [...loadedAllSpots].sort((a, b) => b.averageCost - a.averageCost);
        setSortedArray(sortedAllSpotsDescending);
    }

    return (
        <div className="max-w-6xl mx-auto mt-4 md:mt-6 lg:mt-8 xl:mt-12">
            <div className="flex justify-between items-center gap-8">
                <div>
                    <h2 className="great-vibes text-3xl font-semibold  mb-2">Hidden Gems: User Picks</h2>
                    <p className="text-sm font-medium  w-2/3">Explore traveler-recommended destinations. Dive into our user-added spots for unique experiences.</p>
                </div>
                <Link to="/addSpot" className="btn text-white bg-[#FF681A] px-3 py-2 rounded-lg">Add New</Link>
            </div>
            <div className="border-t mt-12 py-6 flex justify-center">
                <details className="dropdown ">
                    <summary className="m-1 btn text-white bg-[#FF681A]">Sort By <FaCaretDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><button onClick={handleSortingAscending}>Cost Low to High</button></li>
                        <li><button onClick={handleSortingDescending}>Cost High to Low</button></li>
                    </ul>
                </details>
            </div>
            <div className="p-4 grid md:grid-cols-2 gap-6">
                {
                    sortedArray.map(touristSpot => <SingleSpotCard key={touristSpot._id} touristSpot={touristSpot}></SingleSpotCard>)
                }
            </div>
        </div>
    );
};

export default ALlSpot;