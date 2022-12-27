import { Routes, Route } from "react-router-dom";
import Footer from "./common/footer";
import Header from "./common/header";
import Login from "./pages/authorization/login";
import Register from "./pages/authorization/register";
import Home from './pages/home/index';
import Shop from "./pages/shop";
function App() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path  = '' element = {<Home />} />
        <Route path = 'shop' element = {<Shop />} />
        <Route path = 'login' element = {<Login />} />
        <Route path = 'register' element = {<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
