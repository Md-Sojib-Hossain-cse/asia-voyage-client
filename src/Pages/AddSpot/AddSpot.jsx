import Swal from 'sweetalert2'


const AddSpot = () => {

    const handleAddTouristSpot = e => {
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
        const spotDetails = {
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

        fetch("http://localhost:5000/addTouristSpot", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(spotDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulations!",
                        text: "Your tourist spot has been added Successfully.",
                        icon: "success"
                    });
                }
                form.reset();
            })
    }

    return (
        <div className="max-w-6xl mx-auto mt-6 md:mt-8 lg:mt-12 xl:mt-16">
            <h2 className="text-3xl great-vibes text-center font-semibold">Spotlight Your Favorite Destinations!</h2>
            <p className="text-lg mb-6 lg:mb-8 text-center w-11/12 md:w-10/12 lg:w-2/3 mx-auto">Share your must-visit tourist spots with us! Fill out the form below to add your favorite destinations to our curated list and help fellow travelers discover hidden gems around the globe.</p>
            <div className="relative w-full">
                <img src="https://i.ibb.co/8M7SSsY/formbg.jpg" alt="" className="h-full w-full rounded-lg opacity-80 absolute -z-10" />
                <div>
                    <div className="p-4 md:p-8 lg:p-12">
                        <form onSubmit={handleAddTouristSpot} className="p-4 md:p-6 lg:-8 bg-[#13131344] rounded-lg drop-shadow-lg shadow-lg backdrop-blur-sm  grid md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-white text-lg font-medium">Name</label>
                                <input type="text" name="name" id="name" placeholder="Name" className="px-3 py-2 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-white text-lg font-medium">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" className="px-3 py-2 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="touristSpotName" className="text-white text-lg font-medium">Tourist Spot Name</label>
                                <input type="text" name="touristSpotName" id="touristSpotName" placeholder="Tourist Spot Name" className="px-3 py-2 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="countryName" className="text-white text-lg font-medium">Country Name</label>
                                <input type="text" name="countryName" id="countryName" placeholder="Country Name" className="px-3 py-2 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="location" className="text-white text-lg font-medium">Location</label>
                                <input type="text" name="location" id="location" placeholder="Location" className="px-3 py-2 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="photoUrl" className="text-white text-lg font-medium">Photo Url</label>
                                <input type="text" name="photoUrl" id="photoUrl" placeholder="Photo Url" className="px-3 py-2 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="averageCost" className="text-white text-lg font-medium">Average Cost</label>
                                <input type="number" name="averageCost" id="averageCost" placeholder="Average Cost" className="px-3 py-2 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="seasonality" className="text-white text-lg font-medium">Seasonality</label>
                                <input type="text" name="seasonality" id="seasonality" placeholder="Seasonality" className="px-3 py-2 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="travelTime" className="text-white text-lg font-medium">Travel Time</label>
                                <input type="number" name="travelTime" id="travelTime" placeholder="Travel Time in day" className="px-3 py-2 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="visitorsPerYear" className="text-white text-lg font-medium">Visitors Per Year</label>
                                <input type="number" name="visitorsPerYear" id="visitorsPerYear" placeholder="Visitors Per Year" className="px-3 py-2 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label htmlFor="shortDescription" className="text-white text-lg font-medium">Short Description</label>
                                <input type="text" name="shortDescription" id="shortDescription" placeholder="Short Description" className="px-3 py-2 rounded-lg" />
                            </div>
                            <input type="submit" value="Add" className="btn bg-[#FF681A] w-full border-0 text-white text-lg font-semibold mt-3 md:col-span-2" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSpot;