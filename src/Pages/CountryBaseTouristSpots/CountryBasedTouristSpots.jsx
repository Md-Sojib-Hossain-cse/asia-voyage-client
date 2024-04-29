import { Link, useLoaderData } from "react-router-dom";
import SingleSpotBasedOnCountry from "../../Components/SingleSpotBasedOnCountry/SingleSpotBasedOnCountry";

const CountryBasedTouristSpots = () => {
    const loadedCountries = useLoaderData();

    if (!loadedCountries.length > 0) {
        return <div className="min-h-[calc(100vh-480px)] flex flex-col gap-6 justify-center items-center">
            <h3 className="text-2xl font-semibold">No Data available Of this country</h3>
            <p>Wanna add one ? <Link to="/addSpot" className="btn text-white bg-[#FF681A]">Add</Link></p>
        </div>
    }


    return (
        <div className="max-w-6xl mx-auto mt-4 md:mt-6 lg:mt-8 xl:mt-12 min-h-[calc(100vh-480px)]">
            <h2 className="text-3xl font-semibold text-center great-vibes mb-3">Country Treasures: Tourist Hotspots</h2>
            <p className="text-base font-normal text-center w-11/12 md:w-10/12 lg:w-3/4 mx-auto">Explore country-based tourist spots, each offering its unique blend of landscapes, cultural marvels, and hidden gems. Embark on an enriching journey through iconic landmarks and local treasures.</p>
            <div className="mt-8 lg:mt-12">
                {
                    loadedCountries.map(countryDetails => <SingleSpotBasedOnCountry key={countryDetails._id} countryDetails={countryDetails}></SingleSpotBasedOnCountry>)
                }
            </div>
        </div>
    );
};

export default CountryBasedTouristSpots;