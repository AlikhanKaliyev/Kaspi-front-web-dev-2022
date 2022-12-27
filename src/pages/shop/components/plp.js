import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ShopHeader from './shopHeader'
import { filtersTV } from '../constants'
import { BASE_URL } from '../../../constants'
import '../../../style/pages/plp.scss'

const PLP = () => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('')
  const [router] = useSearchParams()
  useEffect(() => {
    const categoryId = router.get('cat')
    axios({
      url: `${BASE_URL}/api/products?category=${categoryId}`,
      method: "GET",
    }).then(result => setProducts(result.data))
    axios({
      url: `${BASE_URL}/api/categories/`,
      method: "GET",
    }).then(result => {
      setCategory(result.data.find((cat) => cat.id == categoryId).name)
    })
  },[])
  
  return (
      <>
        <ShopHeader />
        <div className="plp">
          <div className="plp__filters">
            <div className="plp__filters-header">
              <Link to='shop'>
                <span className="plp__filters-link">Все категории</span>
              </Link>
              <span className="plp__filters-link-category">{category}</span>
            </div>
            <div className="plp__filters-list">
              {filtersTV.map((filter) => (
                <div className="plp__filter-wrapper">
                  <span className="plp__filter-title">{filter.title}</span>
                  {filter.filters.map((child) => (
                    <div className="plp__filter-child">
                      <input type="checkbox" className="plp__filter-checkbox"/>
                      <span>{child.title}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="plp__main">
            <div className="plp__sort-wrapper">
              <select className="plp__sort">
                <option>Популярные</option>
                <option>Сначала дорогие</option>
                <option>Сначала дешевые</option>
              </select>
            </div>
            <div className="plp__products">
              {products.map((item) => (
                <div className="plp__product-card">
                  <div className="plp__product-img">
                    <img src={item.image} />
                  </div>
                  <div className="plp__product-name">
                    <Link to={`/shop/pdp?prodId=${item.id}`} className='link'>
                      {item.name}
                    </Link>
                  </div>
                  <div className="plp__product-rating">
                    <span className={"fa fa-star star"} style={{color: item.rating >= 1 ? '#f14635' : '#999'} }></span>
                    <span className={"fa fa-star star"} style={{color: item.rating >= 2 ? '#f14635' : '#999'} }></span>
                    <span className={"fa fa-star star"} style={{color: item.rating >= 3 ? '#f14635' : '#999'} }></span>
                    <span className={"fa fa-star star"} style={{color: item.rating >= 4 ? '#f14635' : '#999'} }></span>
                    <span className={"fa fa-star star"} style={{color: item.rating >= 5 ? '#f14635' : '#999'} }></span>
                  </div>
                  <div className="plp__product-price">
                    <div className="plp__product-price-number">
                      <span className="plp__product-price-title">Цена</span>
                      <span className="plp__product-price-price">{item.price} ₸</span>
                    </div>
                    <div className="plp__product-price-loan">
                      <span className="plp__product-price-title">В рассрочку</span>
                      <span className="plp__product-price-loan-number">
                        <span className="plp__product-loan-sticker">{Math.round(item.price/12)} ₸</span> x 12
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
  )
}

export default PLP