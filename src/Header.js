import logo from './img/logo.png'
import Nav from './Nav';

const Header = () => {
    return (
        <div className="Header">
            <img className="logo"
            src={logo} alt="logo"></img>
            <Nav/>
        </div>
    );
}

export default Header;