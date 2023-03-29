import { NavLink } from "react-router-dom";
import "./styles/HeroSection.css";
function HeroSection(){
    return(
        <>
            <section id="heroSection">
                <div id="heroImg"/>
                 <div id="heroSectionWords">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <NavLink to={"/Booking-Table"}><button>Reserve a Table</button></NavLink>
                 </div>
            </section>
        </>
    );
}
export default HeroSection;