import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Banner = () => {
    return (
        <div className="-mt-20 -z-10">
            <div className="carousel h-96 md:h-[430px] lg:h-[550px] xl:h[600px] w-full -z-10 relative">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/Bwz2zsK/banner2.jpg" className="w-full object-cover" />
                    <div className="absolute h-full w-full flex justify-end items-end flex-col p-4 md:p-12">
                        <div 
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-easing="linear"
                        className=" w-full md:w-2/3 lg:w-1/2 bg-[#13131344] p-4 md:p-8 rounded-lg drop-shadow-lg shadow-lg backdrop-blur-sm">
                            <h4 className="text-[#FF681A] great-vibes text-2xl font-medium">Tropical Tranquility</h4>
                            <p className="text-white font-normal text-base">Escape to the serene beauty of palm-fringed riverbanks, where the gentle flow of water whispers tales of relaxation and rejuvenation.</p>
                            <ul className="text-white text-sm font-medium list-disc list-inside">
                                <li>Tropical oasis: Lush palms, tranquil waters.</li>
                                <li>Riverside retreat: Serene, soothing ambiance.</li>
                                <li>Blissful solitude: Natures tranquility.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/ZhhXDcT/banner3.jpg" className="w-full object-cover" />
                    <div className="absolute h-full w-full flex justify-end items-end flex-col p-4 md:p-12">
                        <div 
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-easing="linear"
                        className="w-full md:w-2/3 lg:w-1/2 bg-[#13131344] p-4 md:p-8 rounded-lg drop-shadow-lg shadow-lg backdrop-blur-sm">
                            <h4 className="text-[#FF681A] great-vibes text-2xl font-medium">Arctic Wonderland</h4>
                            <p className="text-white font-normal text-base">Set off on an adventure to an enchanting Arctic wonderland, where icy peaks cradle a pristine lake, creating a scene reminiscent of a winter fairy tale.</p>
                            <ul className="text-white text-sm font-medium list-disc list-inside">
                                <li>Frozen majesty: Snow-capped peaks, crystal lake.</li>
                                <li>Winter wonderland: Enchanting snowscape.</li>
                                <li>Thrilling adventure: Explore icy wilderness.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/gjFkW6H/banner1.png" className="w-full object-cover" />
                    <div className="absolute h-full w-full  flex justify-end items-end flex-col p-4 md:p-12">
                        <div 
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-easing="linear"
                        className=" w-full md:w-2/3 lg:w-1/2 bg-[#13131344] p-4 md:p-8 rounded-lg drop-shadow-lg shadow-lg backdrop-blur-sm">
                            <h4 className="text-[#FF681A] great-vibes text-2xl font-medium">Serenity in Natures Embrace</h4>
                            <p className="text-white font-normal text-base">Immerse yourself in the tranquility of a secluded lake nestled amidst rolling hills and verdant forests, offering a sanctuary of peace and natural beauty.</p>
                            <ul className="text-white text-sm font-medium list-disc list-inside">
                                <li>Natural harmony: Reflective waters, verdant hills.</li>
                                <li>Secluded sanctuary: Peaceful, hidden gem.</li>
                                <li>Symphony of nature: Rustling leaves, lapping waves.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banner;