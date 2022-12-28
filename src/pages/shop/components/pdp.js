import ShopHeader from './shopHeader'
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../../../constants'
import '../../../style/pages/pdp.scss'

const PDP = () => {
  const [product, setProduct] = useState([])
  const [desc, setDesc] = useState([])
  const [router] = useSearchParams()

  useEffect(() => {
    const productId = router.get('prodId')
    axios({
      url: `${BASE_URL}/api/products/`,
      method: "GET",
    }).then(result => {
      const prod = result.data.find((product) => product.id == productId)
      setProduct(prod)
      setDesc(prod.description.split(';'))

    })
  },[])


  const addToCart = () => {
    console.log('asd')
  }
  return (
      <>
        <ShopHeader />
        <div className="pdp">
          <div className="pdp__product">
            <div className="pdp__product-img">
              <img src={product.image} />
            </div>
            <div className="pdp__product-info">
              <div className="pdp__product-name">
                {product.name}
              </div>
              <div className="pdp__product-rating">
                <span className={"fa fa-star star"} style={{color: product.rating >= 1 ? '#f14635' : '#999'} }></span>
                <span className={"fa fa-star star"} style={{color: product.rating >= 2 ? '#f14635' : '#999'} }></span>
                <span className={"fa fa-star star"} style={{color: product.rating >= 3 ? '#f14635' : '#999'} }></span>
                <span className={"fa fa-star star"} style={{color: product.rating >= 4 ? '#f14635' : '#999'} }></span>
                <span className={"fa fa-star star"} style={{color: product.rating >= 5 ? '#f14635' : '#999'} }></span>
              </div>
              <div className="plp__product-price pdp__price">
                <div className="plp__product-price-number">
                  <span className="plp__product-price-title">Цена</span>
                  <span className="plp__product-price-price">{product.price} ₸</span>
                </div>
                <div className="plp__product-price-loan">
                  <span className="plp__product-price-title">В рассрочку</span>
                  <span className="plp__product-price-loan-number">
                    <span className="plp__product-loan-sticker">{Math.round(product.price/12)} ₸</span> x 12
                  </span>
                </div>
              </div>
              <div className="pdp__buy-button" onClick={addToCart}>
                  Добавить в корзину
              </div>
              <div className="pdp__desc">
                {desc.map((descText) => (
                  <span>- {descText}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default PDP