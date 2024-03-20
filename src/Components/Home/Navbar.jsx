import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/UseridProvider";

const Navbar = () => {
    const {userId,setUserId} = useContext(AuthContext)
    const handleLogout = ()=>{
        setUserId('')
    }
    return (
        <div className="navbar bg-orange-500 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/tree'>Tree</NavLink></li>
                        {/* <li><NavLink to='/adminpanel'>AdminPanel</NavLink></li> */}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost  border-none hover:bg-green-400 text-xl font-bold ">Auto Poll</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/tree'>Tree</NavLink></li>
                    {/* <li><NavLink to='/adminpanel'>AdminPanel</NavLink></li> */}

                </ul>
            </div>
            <div className="navbar-end">
                {userId ? (
                    <Link to='/' onClick={handleLogout} className="btn bg-green-400 border-none hover:bg-green-300">Logout</Link>
                ) : (
                    <Link to='/login' className="btn bg-green-400 border-none hover:bg-green-300">Login</Link>
                )}

                {/* <Link to='/login' className="btn bg-green-400 border-none hover:bg-green-300">Login</Link> */}

            </div>
        </div>
    );
};

export default Navbar;