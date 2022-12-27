import Banner from "./components/banner";
import MovingSlider from "./components/movingSlider";
import OnlineShop from "./components/onlineShop";
import Products from "./components/products";

const Home = () => {
    return (
        <div className="mt-[75px]">
            <Banner />
            <MovingSlider />
            <OnlineShop />
            <Products />    
        </div>
    )
}

export default Home;
