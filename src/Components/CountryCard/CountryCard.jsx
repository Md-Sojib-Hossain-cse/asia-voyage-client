import PropTypes from "prop-types";
import "./CountryCard.css"
import { Link } from "react-router-dom";

const CountryCard = ({country}) => {
    const {image , countryName , description} = country;
    return (
        <Link to={`/countryBasedSpots/${countryName}`} id="countryCard" className="h-64 w-full relative">
            <img src={image} alt="" className="h-full w-full rounded-lg object-cover"/>
            <div className="absolute top-0 h-full w-full flex flex-col gap-3 justify-center items-center bg-[#13131333] shadow-lg drop-shadow-lg p-4 z-10">
                <h4 className="text-white text-2xl font-black great-vibes">{countryName}</h4>
                <p className="text-center text-sm text-white font-medium">{description}</p>
            </div>
            <div id="hoverFilter" className="bg-[#13131366] absolute bottom-0 h-0 w-full"></div>
        </Link>
    );
};

CountryCard.propTypes = {
    country : PropTypes.object,
}

export default CountryCard;