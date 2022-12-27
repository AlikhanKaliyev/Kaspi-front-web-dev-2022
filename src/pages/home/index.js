import Banner from "./components/banner";
import MovingSlider from "./components/movingSlider";
import OnlineShop from "./components/onlineShop";
import Products from "./components/products";
import BecomePartner from "./components/becomePartner";
import ForBusiness from "./components/ForBusiness";
const Home = () => {
    return (
        <div className="mt-[75px]">
            <Banner />
            <MovingSlider />
            <OnlineShop />
            <Products /> 
            <ForBusiness />
            <BecomePartner />
        </div>
    )
}

export default Home;
