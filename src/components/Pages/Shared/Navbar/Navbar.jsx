import ActiveLink from "../ActiveLink/ActiveLink";


const Navbar = () => {
    return (
        <div>
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/blogs'>Blogs</ActiveLink>
            <ActiveLink to='/login'>Login</ActiveLink>
            <ActiveLink to='/register'>Register</ActiveLink>
            <ActiveLink to='/'></ActiveLink>
        </div>
    );
};

export default Navbar;