import Banner from "./components/banner";
import MovingSlider from "./components/movingSlider";
import OnlineShop from "./components/onlineShop";
import Products from "./components/products";
import BecomePartner from "./components/becomePartner";
import ForBusiness from "./components/forBusiness";
import CabinetLink from "./components/cabinetLink";
const Home = () => {
    return (
        <div className="mt-[75px]">
            <Banner />
            <MovingSlider />
            <OnlineShop />
            <Products /> 
            <ForBusiness />
            <BecomePartner />
            <CabinetLink />
        </div>
    )
}

export default Home;
