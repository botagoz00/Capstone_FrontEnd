import CallToAction from './CallToAction'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago';

const Main = () => {
    return (
        <div className="Main">
            <CallToAction/>
            <Specials/>
            <CustomersSay/>
            <Chicago/>
        </div>
    );
}

export default Main;