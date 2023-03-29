import Nav from "./Nav";
import logo from"./images/Asset 16@4x.png";
import "./styles/Header.css";
function Header(){
    return(
        <>
            <header>
                <img className="logo" src={logo} alt="logo"/>
                <nav>
                    <Nav/>
                </nav>
            </header>
        </>
    );
}
export default Header;