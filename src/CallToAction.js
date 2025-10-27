import photo from './img/restauranfood.jpg'
import {useNavigate} from 'react-router-dom';

const CallToAction = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/booking');
    }

    return (
        <section className="book-table">
            <div className="banner-content">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3><br/>
                <h4>We are family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist!</h4><br/><br/>
                <button class="cta-button" onClick={handleClick}>Book a table</button>
            </div>
            <div className="photo">
                <img src={photo} alt="restaurant food"></img>
            </div>
        </section>
    );
}

export default CallToAction;