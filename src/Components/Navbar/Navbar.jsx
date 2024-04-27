import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li className="text-white"><NavLink to="/" className={({ isActive }) =>
            isActive ? "bg-transparent text-[#FF681A] text-xl border-b-2 rounded-none border-[#FF681A]" : "rounded-none"
        }>Home</NavLink></li>
        <li className="text-white"><NavLink to="/allSpot"
            className={({ isActive }) =>
                isActive ? "bg-transparent text-[#FF681A] text-xl border-b-2 rounded-none border-[#FF681A]" : "rounded-none"
            }
        >All Spot</NavLink></li>
        <li className="text-white"><NavLink to="/addSpot"
            className={({ isActive }) =>
                isActive ? "bg-transparent text-[#FF681A] text-xl border-b-2 rounded-none border-[#FF681A]" : "rounded-none"
            }
        >Add Spot</NavLink></li>
        <li className="text-white"><NavLink to="/myList"
            className={({ isActive }) =>
                isActive ? "bg-transparent text-[#FF681A] text-xl border-b-2 rounded-none border-[#FF681A]" : "rounded-none"
            }
        >My List</NavLink></li>
    </>
    return (
        <div className="bg-[#13131333] shadow-lg drop-shadow-lg sticky">
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
                    <div className="flex items-center gap-2">
                        <img src="https://i.ibb.co/TR9SG6L/logo.png" alt="" className="h-6 w-6 md:h-8 md:w-8" />
                        <p>
                            <span className="text-2xl font-bold text-[#FF681A]">Asia</span>
                            <span className="text-2xl font-bold text-white">Voyage.com</span>
                        </p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-medium">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <button className="btn rounded-lg bg-[#13131344] shadow-lg drop-shadow-lg text-white font-medium border-none">Register</button>
                    <button className="btn rounded-lg bg-[#13131344] shadow-lg drop-shadow-lg text-white font-medium border-none">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;