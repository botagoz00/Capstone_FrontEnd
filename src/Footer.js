import logo2 from './img/logo2.png'

const Footer = () => {
    return (
        <>
            <section>
                <img src={logo2} alt="logo of the restaurant"></img>
            </section>
            <section>
                <h3>Doormat Navigation</h3>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Reservations</a>
                <a href="#">Order Online</a>
                <a href="#">Login</a>
            </section>
             <section>
                <h3>Contact</h3>
                <p>Adress</p>
                <p>Phone number</p>
                <p>Email</p>
            </section>
            <section>
                <h3>Social Media Links</h3>
                <p>Instagram</p>
                <p>Telegram</p>
            </section>
        </>
    );
}

export default Footer;