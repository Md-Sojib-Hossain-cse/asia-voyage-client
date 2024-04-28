import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from 'sweetalert2';


const Register = () => {
    const [passwordError, setPasswordError] = useState(null);
    const [nameError, setNameError] = useState(null);
    const [photoUrlError, setPhotoUrlError] = useState(null);
    const [error, setError] = useState(null);

    const { createUser ,setLoading} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photoUrl, password);

        //Name field verification 
        if (!name.length > 0) {
            setNameError("Name Field Required!");
            return;
        }
        setNameError(null);

        //photo field verification
        if (!photoUrl.length > 0) {
            setPhotoUrlError("Photo Url Field Required!");
            return;
        }
        setPhotoUrlError(null);

        //password verification 
        if (password.length < 6) {
            setPasswordError("Password length must be at least 6 character long.");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must be contain an uppercase character");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setPasswordError("Password must be contain a lowercase character");
            return;
        }
        setPasswordError(null);


        //create User 
        createUser(email, password)
            .then(result => {
                setError(null);
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Congratulations!",
                    text: "User Created Successfully!",
                    icon: "success"
                });
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
    }


    return (
        <div className="max-w-6xl mx-auto mt-6 md:mt-8 lg:mt-12 xl:mt-16">
            <div className="relative w-full">
                <img src="https://i.ibb.co/8M7SSsY/formbg.jpg" alt="" className="h-full w-full rounded-lg opacity-80 absolute -z-10" />
                <div className="flex gap-6 md:gap-0 flex-col-reverse md:flex-row h-full">
                    <div className="md:w-2/3 p-4 md:p-8 lg:p-12">
                        <form onSubmit={handleRegister} className="p-4 md:p-6 lg:-8 bg-[#13131344] rounded-lg drop-shadow-lg shadow-lg backdrop-blur-sm">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-white text-lg font-medium">Name</label>
                                <input type="text" name="name" id="name" placeholder="Your Name" className="px-3 py-2 rounded-lg" />
                                {
                                    nameError ? <p className="text-yellow-400">{nameError}</p> : ""
                                }
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-white text-lg font-medium">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" className="px-3 py-2 rounded-lg" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-white text-lg font-medium">Photo URL</label>
                                <input type="text" name="photo" id="photo" placeholder="Photo URL" className="px-3 py-2 rounded-lg" />
                                {
                                    photoUrlError ? <p className="text-yellow-400">{photoUrlError}</p> : ""
                                }
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="text-white text-lg font-medium">Password</label>
                                <input type="password" name="password" id="password" placeholder="Password" className="px-3 py-2 rounded-lg" />
                                {
                                    passwordError ? <p className="text-yellow-400">{passwordError}</p> : ""
                                }
                            </div>
                            {
                                error ? <p className="text-yellow-400">{error}</p> : ""
                            }
                            <p className="text-white font-medium mt-6">Already Registered ? Please <Link to="/login" className="text-blue-400">Login</Link></p>
                            <input type="submit" value="Register" className="btn bg-[#FF681A] w-full border-0 text-white text-lg font-semibold mt-3" />
                        </form>
                    </div>
                    <div className="flex justify-center items-center flex-col bg-[#13131366] text-white rounded-tl-lg md:rounded-tl-none rounded-tr-lg rounded-br-none md:rounded-br-lg py-8 md:py-0">
                        <h2 className="text-4xl font-semibold mb-3">Register Now!</h2>
                        <p className="text-lg font-medium text-center">Join the Journey: Register for Exclusive Travel Experiences!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;