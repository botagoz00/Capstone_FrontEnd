import brothers1 from './img/brothers1.jpg'
import brothers2 from './img/brothers2.jpg'

const Chicago = () => {
    return (
        <section className="last">
            <div className="last-content">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3><br/>
                <p>This cozy Little Lemon restaurant was founded by two brothers, Mario and Adrian, with a passion for fresh, vibrant flavors. Their goal is to bring joy to every meal with dishes made from the finest ingredients.</p><br/><br/>
            </div>
            <div className="photos-brothers">
                <img src={brothers1} alt="founders"></img>
                <img src={brothers2} alt="founders 2"></img>
            </div>
        </section>
    );
}

export default Chicago;