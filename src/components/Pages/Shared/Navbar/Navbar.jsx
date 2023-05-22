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
            <div>
                <img className="rounded-full w-16 h-16" src="https://i.ibb.co/nzxWNqZ/research.jpg" alt="" />
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl font-bold">Toys Hub</a>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 text-lg font-semibold">
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/blogs'>Blogs</ActiveLink>
                <ActiveLink to='/all-toys'>All Toys</ActiveLink>
                {user && <ActiveLink to='/my-toys'>My Toys</ActiveLink>}
                {user && <ActiveLink to='/addToy'>Add a toy</ActiveLink>}

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


{/* <div className="absolute flex items-center rounded-xl bottom-0 h-full left-0 top-0">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>Outstanding Storage of Research Toys</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>
                </div> */}