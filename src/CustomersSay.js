import person1 from './img/person1.jpeg'
import person2 from './img/person2.jpeg'
import person3 from './img/person3.jpeg'
import person4 from './img/person4.jpeg'

const CustomersSay = () => {
    return (
        <section className="testimonials">
            <h2>Testimonials</h2><br/>
            <div className="peoples-container">
                <article className="peoples-card">
                    <h4><b>Rating: <i>5/5</i></b></h4>
                    <div className="person-info">
                        <img src={person1} alt="customer 1"></img>
                        <span className="person-name">Jason Wong</span>
                    </div>
                    <p>I tried the pasta here and it was absolutely delicious. Quick delivery and friendly staff!</p>
                </article>
                <article className="peoples-card">
                    <h4><b>Rating: <i>4/5</i></b></h4>
                    <div className="person-info">
                        <img src={person2} alt="customer 2"></img>
                        <span className="person-name">Alison Smith</span>
                    </div>
                    <p>Amazing experience! The coffee was perfect and the atmosphere in the restaurant is so cozy.</p>
                </article>
                <article className="peoples-card">
                    <h4><b>Rating: <i>5/5</i></b></h4>
                    <div className="person-info">
                        <img src={person3} alt="customer 3"></img>
                        <span className="person-name">Tom Hook</span>
                    </div>
                    <p>Ordered a pizza for the first time - super fresh and tasty. Will definitely order again!</p>
                </article>
                <article className="peoples-card">
                    <h4><b>Rating: <i>4/5</i></b></h4>
                    <div className="person-info">
                        <img src={person4} alt="customer 4"></img>
                        <span className="person-name">Will Riche</span>
                    </div>
                    <p>Great service and excellent food. My order arrived on time and everything was just perfect.</p>
                </article>
            </div>
        </section>
    );
}

export default CustomersSay;