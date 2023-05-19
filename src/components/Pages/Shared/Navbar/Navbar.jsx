import { AuthContext } from "../../../Providers/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";
import React, { useContext } from 'react';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }


    return (
        <div className="navbar bg-gray-300 p-4 flex flex-col lg:flex-row">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl font-bold">Toys Hub</a>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 text-lg font-semibold">
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/blogs'>Blogs</ActiveLink>
                <ActiveLink to='/register'>Register</ActiveLink>
                <ActiveLink to='/'></ActiveLink>

                <div className="mt-5">
                    <div className="tooltip" data-tip={user?.displayName}>
                        <button className="btn bg-gray-300 border-none"><img className="w-10 rounded-full" src={user?.photoURL} /></button>

                        {user ? <>
                            <button onClick={handleLogOut} className="btn btn-primary">Sign Out</button></> : <ActiveLink to='/login'>Login</ActiveLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Navbar;