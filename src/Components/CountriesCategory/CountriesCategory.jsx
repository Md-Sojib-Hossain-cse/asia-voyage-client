import { useEffect } from "react";
import { useState } from "react";
import CountryCard from "../CountryCard/CountryCard";

const CountriesCategory = () => {
    const [countries , setCountries] = useState([]);
    const [loadingCountiesData , setLoadingCountriesData] = useState(true)

    useEffect(() => {
        fetch("http://localhost:5000/countriesCategory")
            .then(res => res.json())
            .then(data => {
                setCountries(data);
                setLoadingCountriesData(false);
            })
    } , [])

    if(loadingCountiesData){
        return <div className="max-w-6xl mx-auto mt-4 md:mt-6 lg:mt-8 xl:mt-12 flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }


    return (
        <div className="max-w-6xl mx-auto mt-4 md:mt-6 lg:mt-8 xl:mt-12">
            <h2 className="text-3xl font-semibold great-vibes text-center mt-8 lg:mt-12">Explore Exotic Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 p-4">
                {
                    countries.map(country => <CountryCard key={country._id} country={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default CountriesCategory;