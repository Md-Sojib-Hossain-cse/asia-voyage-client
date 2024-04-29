import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="mt-8 lg:mt-12 bg-[#131313] text-white">
            <footer className="footer p-10 max-w-6xl mx-auto md:flex md:justify-between md:items-center">
                <nav>
                    <h5 className="footer-title great-vibes">
                        <span className="text-2xl font-bold text-[#FF681A]">Asia</span>
                        <span className="text-2xl font-bold text-white">Voyage</span>
                    </h5>
                    <h6 className="text-lg font-medium">Contact Us : </h6>
                    <a className="link link-hover">Phone : 01906479901</a>
                    <a className="link link-hover">Email : sojibhossain.cse@gmail.com</a>
                </nav>
                <div>
                    <h6 className="text-2xl font-semibold great-vibes mb-3">Gallery</h6>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://i.ibb.co/HXtPfDg/gallery1.png" alt="" />
                        <img src="https://i.ibb.co/SfRHHqz/gallery2.png" alt="" />
                        <img src="https://i.ibb.co/MG3qMR4/gallery3.png" alt="" />
                        <img src="https://i.ibb.co/wwFPrp4/gallery4.png" alt="" />
                    </div>
                </div>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a href="https://web.facebook.com/Arifulislam083/" target="_blank"><MdOutlineFacebook /></a>
                        <a href="https://www.linkedin.com/in/md-sojib-hossain-059a6b230/" target="_blank"><IoLogoLinkedin /></a>
                        <a href="https://github.com/Md-Sojib-Hossain-cse" target="_blank"><IoLogoGithub /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;