import { Routes, Route } from "react-router-dom";
import Footer from "./common/footer";
import Header from "./common/header";
import Home from './pages/home/index';
import Shop from "./pages/shop";
function App() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path  = '' element = {<Home />} />
        <Route path = 'shop' element = {<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
