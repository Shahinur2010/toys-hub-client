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
        <div className="navbar bg-neutral p-4 flex flex-col lg:flex-row text-white">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl font-bold">Toys Hub</a>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 text-lg font-semibold">
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/blogs'>Blogs</ActiveLink>
                <ActiveLink to='/'></ActiveLink>

                <div className="mt-5">
                    <div className="tooltip flex flex-col lg:flex-row gap-2" data-tip={user?.displayName}>
                        <button className="btn"><img className="w-10 rounded-full" src={user?.photoURL} /></button>

                        {user ? <>
                            <button onClick={handleLogOut} className="btn">Sign Out</button></> : <ActiveLink to='/login'>Login</ActiveLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Navbar;