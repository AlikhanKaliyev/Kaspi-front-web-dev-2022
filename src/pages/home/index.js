import Banner from "./components/banner";
import MovingSlider from "./components/movingSlider";
import OnlineShop from "./components/onlineShop";
import Products from "./components/products";
import BecomePartner from "./components/becomePartner";
const Home = () => {
    return (
        <div className="mt-[75px]">
            <Banner />
            <MovingSlider />
            <OnlineShop />
            <Products /> 
            <BecomePartner />
        </div>
    )
}

export default Home;
