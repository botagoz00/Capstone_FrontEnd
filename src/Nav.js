import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div className="Nav">
            <ul className="nav-links">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/">ABOUT</Link></li>
                <li><Link to="/">MENU</Link></li>
                <li><Link to="/booking">RESERVATIONS</Link></li>
                <li><Link to="/">ORDER ONLINE</Link></li>
                <li><Link to="/">LOGIN</Link></li>
        </ul>
        </div>
    );
}

export default Nav;