import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
function Nav() {
    return ( 
        <ul>
            <NavLink to={"/"}><li>Home</li></NavLink>
            <HashLink smooth to="/#About"><li>About</li></HashLink>
            <NavLink to={"/Menu"}><li>Menu</li></NavLink>
            <HashLink smooth to="/#Testimonials"><li>Testimonials</li></HashLink>
            <NavLink to={"/Booking-Table"}><li>Booking Table</li></NavLink>
        </ul>
     );
}

export default Nav;