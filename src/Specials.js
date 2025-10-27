import food1 from './img/greek salad.jpg'
import food2 from './img/bruschetta.jpeg'
import food3 from './img/lemon dessert.jpg'

const Specials = () => {
    return (
    <section className="specials">
        <div className="titling">
            <h2 className="section-title">This week's specials!</h2>
            <button className="cta-button1">Online Menu</button>
        </div>
        <div className="specials-container">
            <article className="specials-card">
                <img src={food1} alt="greek salad"></img>
                <h4><b>
                    Greek Salad <span className="price">$12.99</span>
                </b></h4>
                <p>A refreshing mix of crisp cucumbers, juicy tomatoes, olives, and feta, tossed in a olive oil.</p><br/>
                <h4><b>Order a delivery</b></h4><br/>
            </article>
            <article className="specials-card">
                <img src={food2} alt="bruschetta"></img>
                <h4><b>
                    Bruschetta <span className="price">$10.99</span>
                </b></h4>
                <p>Grilled bread topped with fresh tomatoes, garlic, basil, and a drizzle of extra virgin olive oil.</p><br/>
                <h4><b>Order a delivery</b></h4><br/>
            </article>
            <article className="specials-card">
                <img src={food3} alt="lemon dessert"></img>
                <h4><b>
                    Lemon dessert <span className="price">$10.99</span>
                </b></h4>
                <p>A bright and zesty treat with a sweet-tart flavor that melts in your mouth.</p><br/>
                <h4><b>Order a delivery</b></h4><br/>
            </article>
        </div>
    </section>
    );
}

export default Specials;