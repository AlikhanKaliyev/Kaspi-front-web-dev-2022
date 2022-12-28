import '../../style/pages/shop.scss'
import ShopHeader from './components/shopHeader'
import ShopMain from './components/shopMain'
import { Routes, Route } from "react-router-dom"

const Shop = () => {
    return (
    <div className="shop">
        <ShopHeader />
        <ShopMain />
    </div>
    )
}

export default Shop;