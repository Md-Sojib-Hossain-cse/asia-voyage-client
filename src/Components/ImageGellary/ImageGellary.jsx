const ImageGellary = () => {
    return (
        <div className="max-w-6xl mx-auto mt-6 md:mt-10 lg:mt-12 xl:mt-24">
            <h1 className="text-center text-3xl font-semibold great-vibes mb-4">Visual Journeys: Explore the World Through Our Lens</h1>
            <p className="text-base text-center font-normal w-11/12 md:w-2/3 max-w-4xl mx-auto mb-4 lg:mb-8">Immerse yourself in stunning landscapes, vibrant cultures, and unforgettable moments captured in our curated image gallery. Let each photo transport you to a world of wanderlust and inspiration.</p>
            <div className="grid grid-cols-3 gap-6 min-h-screen">
                <div className="row-span-4">
                    <img src="https://i.ibb.co/MBfXhN9/gal1.png" alt="" className="h-full w-full object-cover rounded-lg" />
                </div>
                <div className="row-span-2">
                    <img src="https://i.ibb.co/2dRRnGH/gal2.png" alt="" className="h-full w-full object-cover rounded-lg" />
                </div>
                <div className="row-span-4">
                    <img src="https://i.ibb.co/yswJgL2/gal3.png" alt="" className="h-full w-full object-cover rounded-lg" />
                </div>
                <div className="row-span-2">
                    <img src="https://i.ibb.co/bdjD686/gal4.png" alt="" className="h-full w-full object-cover rounded-lg" />
                </div>
                <div className="row-span-3">
                    <img src="https://i.ibb.co/th8DMqq/gal5.png" alt="" className="h-full w-full object-cover rounded-lg"/>
                </div>
                <div className="row-span-3">
                    <img src="https://i.ibb.co/rwfF2Vg/gal6.png" alt="" className="h-full w-full object-cover rounded-lg"/>
                </div>
                <div className="row-span-3">
                    <img src="https://i.ibb.co/mXcGC30/gal7.png" alt="" className="h-full w-full object-cover rounded-lg"/>
                </div>
            </div>
        </div>
    );
};

export default ImageGellary;