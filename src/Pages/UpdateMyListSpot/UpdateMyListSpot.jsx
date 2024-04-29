import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMyListSpot = () => {
    const loadedData = useLoaderData();

    const handleUpdateTouristSpot = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const userEmail = form.email.value;
        const touristSpotName = form.touristSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const photoUrl = form.photoUrl.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const visitorPerYear = form.visitorsPerYear.value;
        const shortDescription = form.shortDescription.value;
        const updatedSpotDetails = {
            userName,
            userEmail,
            touristSpotName,
            countryName,
            location,
            photoUrl,
            averageCost,
            seasonality,
            travelTime,
            visitorPerYear,
            shortDescription
        }

        fetch(`http://localhost:5000/myList/update/${loadedData._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedSpotDetails)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: "Have a relax!",
                        text: "Place Details Successfully Updated!",
                        icon: "success"
                    });
                    form.reset();
                }
            })
    }
    return (
        <div className="max-w-6xl mx-auto mt-6 md:mt-8 lg:mt-12 xl:mt-16">
            <h2 className="text-3xl great-vibes text-center font-semibold mb-8">Update Your Adventure: Edit Your Tourist Spots</h2>
            <div className="relative w-full">
                <img src="https://i.ibb.co/8M7SSsY/formbg.jpg" alt="" className="h-full w-full rounded-lg opacity-80 absolute -z-10" />
                <div>
                    <div className="p-4 md:p-8 lg:p-12">
                        <form onSubmit={handleUpdateTouristSpot} className="p-4 md:p-6 lg:-8 bg-[#13131344] rounded-lg drop-shadow-lg shadow-lg backdrop-blur-sm  grid md:grid-cols-2 gap-3">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-white text-lg font-medium">Name</label>
                                <input type="text" name="name" id="name" placeholder="Name" defaultValue={loadedData?.userName && loadedData?.userName} className="px-3 py-2 rounded-lg" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-white text-lg font-medium">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" defaultValue={loadedData?.userEmail && loadedData?.userEmail} className="px-3 py-2 rounded-lg" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="touristSpotName" className="text-white text-lg font-medium">Tourist Spot Name</label>
                                <input type="text" name="touristSpotName" id="touristSpotName" 
                                defaultValue={loadedData?.touristSpotName && loadedData?.touristSpotName} placeholder="Tourist Spot Name" className="px-3 py-2 rounded-lg" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="countryName" className="text-white text-lg font-medium">Country Name</label>
                                <input type="text" name="countryName" id="countryName" 
                                defaultValue={loadedData?.countryName && loadedData?.countryName} placeholder="Country Name" className="px-3 py-2 rounded-lg" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="location" className="text-white text-lg font-medium">Location</label>
                                <input type="text" name="location" id="location" placeholder="Location" 
                                defaultValue={loadedData?.location && loadedData?.location} className="px-3 py-2 rounded-lg" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="photoUrl" className="text-white text-lg font-medium">Photo Url</label>
                                <input type="text" name="photoUrl" id="photoUrl" placeholder="Photo Url" 
                                defaultValue={loadedData?.photoUrl && loadedData?.photoUrl}className="px-3 py-2 rounded-lg" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="averageCost"className="text-white text-lg font-medium">Average Cost</label>
                                <input type="number" name="averageCost" id="averageCost" 
                                defaultValue={loadedData?.averageCost && loadedData?.averageCost}
                                placeholder="Average Cost" className="px-3 py-2 rounded-lg" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="seasonality"className="text-white text-lg font-medium">Seasonality</label>
                                <input type="text" name="seasonality" id="seasonality" 
                                defaultValue={loadedData?.seasonality && loadedData?.seasonality}placeholder="Seasonality" className="px-3 py-2 rounded-lg" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="travelTime" className="text-white text-lg font-medium">Travel Time</label>
                                <input type="number" name="travelTime" id="travelTime"
                                defaultValue={loadedData?.travelTime && loadedData?.travelTime} placeholder="Travel Time in day" className="px-3 py-2 rounded-lg" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="visitorsPerYear" className="text-white text-lg font-medium">Visitors Per Year</label>
                                <input type="number" name="visitorsPerYear" id="visitorsPerYear"  defaultValue={loadedData?.visitorPerYear && loadedData?.visitorPerYear}placeholder="Visitors Per Year" className="px-3 py-2 rounded-lg" required />
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label htmlFor="shortDescription" className="text-white text-lg font-medium">Short Description</label>
                                <input type="text" name="shortDescription" id="shortDescription" 
                                defaultValue={loadedData?.shortDescription && loadedData?.shortDescription}placeholder="Short Description" className="px-3 py-2 rounded-lg" required />
                            </div>
                            <input type="submit" value="Update" className="btn bg-[#FF681A] w-full border-0 text-white text-lg font-semibold mt-3 md:col-span-2" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateMyListSpot;