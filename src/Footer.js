import {Link} from 'react-router-dom';
import logo2 from './img/logo2.png'

const Footer = () => {
    return (
        <div className='Footer'>
            <section>
                <img src={logo2} alt="logo of the restaurant"></img><br/>
            </section>
            <section className="footer-links">
                <h4><b>Doormat Navigation</b></h4><br/>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Menu</Link>
                <Link to="/booking">Reservations</Link>
                <Link to="/">Order Online</Link>
                <Link to="/">Login</Link>
            </section>
             <section className="footer-links">
                <h4><b>Contact</b></h4><br/>
                <p>Adress</p>
                <p>Phone number</p>
                <p>Email</p>
            </section>
            <section className="footer-links">
                <h4><b>Social Media Links</b></h4><br/>
                <p>Instagram</p>
                <p>Telegram</p>
            </section>
        </div>
    );
}

export default Footer;