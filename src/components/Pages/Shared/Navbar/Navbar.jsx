import ActiveLink from "../ActiveLink/ActiveLink";


const Navbar = () => {
    return (
        <div>
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/blogs'>Blogs</ActiveLink>
            <ActiveLink to='/'></ActiveLink>
            <ActiveLink to='/'></ActiveLink>
            <ActiveLink to='/'></ActiveLink>
        </div>
    );
};

export default Navbar;