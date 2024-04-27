import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io5";

const Login = () => {
    const [error, setError] = useState(null);
    const { loginUser, googleLogin, facebookLogin , setUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const currentUser = result.user;
                const displayName = currentUser.displayName;
                const email = currentUser.email;
                const photoURL = currentUser.photoURL;
                const userDetails = {
                    displayName, 
                    email, 
                    photoURL
                }
                setUser(userDetails);
                if(location.state.pathname){
                    navigate(location.state.pathname);
                }
                else{
                    navigate("/")
                }
            })
            .catch(error => {
                setError(error.message);
            })
    }

    //handle google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const currentUser = result.user;
                const displayName = currentUser.displayName;
                const email = currentUser.email;
                const photoURL = currentUser.photoURL;
                const userDetails = {
                    displayName, 
                    email, 
                    photoURL
                }
                setUser(userDetails);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    //handle facebook login
    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                const currentUser = result.user;
                const displayName = currentUser.displayName;
                const email = currentUser.email;
                const photoURL = currentUser.photoURL;
                const userDetails = {
                    displayName, 
                    email, 
                    photoURL
                }
                setUser(userDetails);
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className="max-w-6xl mx-auto mt-6 md:mt-8 lg:mt-12 xl:mt-16">
            <div className="relative w-full">
                <img src="https://i.ibb.co/8M7SSsY/formbg.jpg" alt="" className="h-full w-full rounded-lg opacity-80 absolute -z-10" />
                <div className="flex gap-6 md:gap-0 flex-col md:flex-row h-full">
                    <div className="flex justify-center items-center flex-col bg-[#13131366] text-white  rounded-tr-lg md:rounded-tr-none  rounded-tl-lg rounded-bl-none md:rounded-bl-lg py-8 md:py-0">
                        <h2 className="text-4xl font-semibold mb-3">Login Now!</h2>
                        <p className="text-lg font-medium text-center">Gateway to Your Travel Odyssey: Log in for Seamless Adventures!</p>
                    </div>
                    <div className="md:w-2/3 p-4 md:p-8 lg:p-12">
                        <form onSubmit={handleLogin} className="p-4 md:p-6 lg:-8 bg-[#13131344] rounded-lg drop-shadow-lg shadow-lg backdrop-blur-sm">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-white text-lg font-medium">Email</label>
                                <input type="email" name="email" id="email" placeholder="Name" className="px-3 py-2 rounded-lg" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="text-white text-lg font-medium">Password</label>
                                <input type="password" name="password" id="password" placeholder="Password" className="px-3 py-2 rounded-lg" />
                            </div>
                            {
                                error ? <p className="text-yellow-400">{error.split("(")[1].split(")")[0]}</p> : ""
                            }
                            <p className="text-white font-medium mt-6">Do not have any account? Please <Link to="/register" className="text-blue-400">Register</Link></p>
                            <input type="submit" value="Login" className="btn bg-[#FF681A] w-full border-0 text-white text-lg font-semibold mt-3" />
                            <div className="mt-6">
                            <div className="divider text-white font-medium">Or Login With</div>
                                <div className="flex justify-around items-center mt-6">
                                    <p onClick={handleGoogleLogin} className="btn flex justify-center items-center gap-3 w-2/5 text-lg font-bold"><IoLogoGoogle />google</p>
                                    <p onClick={handleFacebookLogin} className="btn flex justify-center items-center gap-3 w-2/5 text-lg font-bold"><IoLogoFacebook />facebook</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;