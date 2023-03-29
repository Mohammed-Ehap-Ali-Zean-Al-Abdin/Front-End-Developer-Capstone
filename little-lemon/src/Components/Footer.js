import Nav from "./Nav";
import logo from "./images/Asset 20@4x.png";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import youtube from "./images/youtube.png";
import instagram from "./images/instagram.png"
import "./styles/Footer.css";
function Footer(){
    return(
        <>
            <footer>
                <img src={logo} alt="logo" id="footerLogo"/>
                <div className="footerLinks">
                    <h4>Navigation</h4>
                    <Nav/>
                </div>
                <div className="footerLinks">
                    <h4>Contact</h4>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div className="footerLinks">
                    <h4>Social Media</h4>
                    <ul>
                        <div>
                            <img src={facebook} alt="facebook" className="mediaLogos"/>
                            <li>Facebook</li>
                        </div>
                        <div>
                            <img src={twitter} alt="twitter" className="mediaLogos"/>
                            <li>Twitter</li>
                        </div>
                        <div>
                            <img src={instagram} alt="instagram" className="mediaLogos"/>
                            <li>Instagram</li>
                        </div>
                        <div>
                            <img src={youtube} alt="youtube" className="mediaLogos"/>
                            <li>YouTube</li>
                        </div>
                    </ul>
                </div>
            </footer>
        </>
    );
}
export default Footer;