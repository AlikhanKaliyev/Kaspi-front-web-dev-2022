import { Routes, Route } from "react-router-dom";
import Footer from "./common/footer";
import Header from "./common/header";
import Login from "./pages/authorization/login";
import Register from "./pages/authorization/register";
import Cabinet from "./pages/cabinet";
import MyBank from "./pages/cabinet/options/MyBank";
import MyPayments from "./pages/cabinet/options/MyPayments";
import MyProfile from "./pages/cabinet/options/MyProfile";
import Transactions from "./pages/cabinet/options/Transactions";
import Home from './pages/home/index';
import Shop from "./pages/shop";
import PLP from "./pages/shop/components/plp";
import PDP from "./pages/shop/components/pdp";

function App() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path  = '' element = {<Home />} />
        <Route path = 'shop' element = {<Shop />} />
        <Route path = 'login' element = {<Login />} />
        <Route path = 'register' element = {<Register />} />
        <Route path = 'cabinet' element ={<Cabinet />}>
          <Route path = '' element = {<MyBank />} />
          <Route path = 'bank' element = {<MyBank />} />
          <Route path = 'transactions' element = {<Transactions />} />
          <Route path = 'profile' element = {<MyProfile />} />
          <Route path = 'payments' element = {<MyPayments />} />
        </Route>
        <Route path = 'shop/plp' element = {<PLP />} />
        <Route path = 'shop/pdp' element = {<PDP />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
