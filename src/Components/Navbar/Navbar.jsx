import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
    const { logoutUser, user, setUser, loading } = useContext(AuthContext);
    const [ theme , setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");


    //handle logout user 
    const handleLogOut = () => {
        logoutUser()
            .then(
                setUser(null)
            )
    }

    const handleTheme = (e) => {
        if(e.target.checked){
            setTheme("sunset")
        }
        else{
            setTheme("light")
        }
    }

    // theme controller
    useEffect(() => {
        localStorage.setItem("theme" , theme);
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme" , localTheme)
    } ,[theme])

    const themeController = <>
        <label className="cursor-pointer grid place-items-center">
            <input onChange={handleTheme} id="themeController" type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label></>


    const navLinks = <>
        <li className="text-white"><NavLink to="/" className={({ isActive }) =>
            isActive ? "bg-transparent text-[#FF681A] lg:text-xl border-b-2 rounded-none border-[#FF681A]" : "rounded-none"
        }>Home</NavLink></li>
        <li className="text-white"><NavLink to="/allSpot"
            className={({ isActive }) =>
                isActive ? "bg-transparent text-[#FF681A] lg:text-xl border-b-2 rounded-none border-[#FF681A]" : "rounded-none"
            }
        >All Tourist Spot</NavLink></li>
        {/* {user && */}
        <li className="text-white"><NavLink to="/addSpot"
            className={({ isActive }) =>
                isActive ? "bg-transparent text-[#FF681A] lg:text-xl border-b-2 rounded-none border-[#FF681A]" : "rounded-none"
            }
        >Add Tourist Spot</NavLink></li>
        {/* } */}
        {
            user && <li className="text-white"><NavLink to="/myList"
                className={({ isActive }) =>
                    isActive ? "bg-transparent text-[#FF681A] lg:text-xl border-b-2 rounded-none border-[#FF681A]" : "rounded-none"
                }
            >My List</NavLink></li>
        }
    </>
    return (
        <div className="sticky top-0 w-full bg-[#13131344] drop-shadow-lg shadow-lg backdrop-blur-sm z-10">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-medium">
                            {navLinks}
                        </ul>
                    </div>
                    <p className="great-vibes">
                        <span className="text-2xl font-bold text-[#FF681A]">Asia</span>
                        <span className="text-2xl font-bold text-white">Voyage</span>
                    </p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-medium">
                        {navLinks}
                    </ul>
                </div>
                {
                    loading ?
                        <span className="loading loading-spinner loading-md"></span> :
                        user ?
                            <div className="navbar-end space-x-3">
                                {themeController}
                                <div className="dropdown dropdown-hover">
                                    <img src={user?.photoURL || "https://i.ibb.co/sbkyhCp/blank-profile.png"} alt="" className="h-8 w-8 rounded-full border border-[#131313]" />
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 relative right-0">
                                        <li className="text-lg text-center font-medium py-3">{user?.displayName}</li>
                                        <li><button onClick={handleLogOut} className="btn rounded-lg bg-[#FF681A] shadow-lg drop-shadow-lg text-white font-medium border-none">LogOut</button></li>
                                    </ul>
                                </div>

                            </div> :
                            <div className="navbar-end gap-3 space-x-3">
                                {themeController}
                                <Link to="/register"><button className="btn rounded-lg bg-[#FF681A] shadow-lg drop-shadow-lg text-white font-medium border-none">Register</button></Link>
                                <Link to="/login"><button className="btn rounded-lg bg-[#FF681A] shadow-lg drop-shadow-lg text-white font-medium border-none">Login</button></Link>
                            </div>
                }
            </div>
        </div>
    );
};

export default Navbar;