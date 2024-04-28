import { IoMdStar } from "react-icons/io";


const ClientReview = () => {
    return (
        <div className="max-w-6xl mx-auto mt-10 md:mt-12 lg:mt-16 xl:mt-24">
            <h3 className="text-center text-3xl font-semibold great-vibes mb-4">Voices of Adventure: Client Testimonials</h3>
            <p className="text-base text-center font-normal w-11/12 md:w-2/3 max-w-4xl mx-auto mb-4 lg:mb-8">Discover what our adventurers have to say about their unforgettable experiences with us. Dive into authentic stories and glowing reviews that inspire the explorer in you.</p>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-20">
                <div className="border shadow-lg rounded-lg p-4 md:p-6 mt-16">
                    <img src="https://i.ibb.co/5KrpW2g/client1.png" alt="" className="h-24 w-24 rounded-full object-cover relative -top-16 left-1/2 -translate-x-1/2" />
                    <p className="text-center text-lg font-medium min-h-36 md:min-h-44 lg:min-h-52">A truly exceptional experience! From the warm hospitality to the breathtaking vistas, every detail was meticulously attended to. Impeccable service and unforgettable memories made.</p>
                    <div className="flex justify-between items-center">
                        <h6 className="text-xl font-semibold mt-3">From : John</h6>
                        <div className="flex gap-1 text-yellow-500">
                            <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
                        </div>
                    </div>
                </div>
                <div className="border shadow-lg rounded-lg p-4 md:p-6 mt-16">
                    <img src="https://i.ibb.co/L8qfN6m/client3.jpg" alt="" className="h-24 w-24 rounded-full object-cover relative -top-16 left-1/2 -translate-x-1/2" />
                    <p className="text-center flex-grow text-lg font-medium min-h-36 md:min-h-44 lg:min-h-52">An adventure beyond compare! From sunrise to sunset, each moment brimmed with wonder and excitement. Exceeded every expectation I had!</p>
                    <div className="flex justify-between items-center">
                        <h6 className="text-xl font-semibold mt-3">From : Sarah</h6>
                        <div className="flex gap-1 text-yellow-500">
                            <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
                        </div>
                    </div>
                </div>
                <div className="border shadow-lg rounded-lg p-4 md:p-6 mt-16">
                    <img src="https://i.ibb.co/wMgZ2Nn/client2.jpg" alt="" className="h-24 w-24 rounded-full object-cover relative -top-16 left-1/2 -translate-x-1/2" />
                    <p className="text-center flex-grow-0 text-lg font-medium min-h-36 md:min-h-44 lg:min-h-52">Set out on an incredible journey! From vibrant markets to tranquil landscapes, each day was meticulously crafted, offering unforgettable sights and experiences that will be cherished for years to come.</p>
                    <div className="flex justify-between items-center">
                        <h6 className="text-xl font-semibold mt-3">From : Michael</h6>
                        <div className="flex gap-1 text-yellow-500">
                            <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;