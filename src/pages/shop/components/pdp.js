import ShopHeader from './shopHeader'
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../../../constants'
import '../../../style/pages/pdp.scss'
import { comment } from 'postcss'

const PDP = () => {
  const [product, setProduct] = useState([])
  const [desc, setDesc] = useState([])
  const [router] = useSearchParams()
  const [comments,setComments] = useState([]);
  const [newComment,setNewComment] = useState();
  const onChangeNewComment = (e) => {
      setNewComment(e.target.value);
  }
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
    getComments();
  },[])
  const getComments = () => {
    const productId = router.get('prodId')
    axios.get(`${BASE_URL}/api/products/${productId}/comments/`,
    ).then(res => {
      setComments(res.data);
    })
  }
  const addComment = () => {
    if(newComment.trim().length === 0) {
      return 
    }
    const productId = router.get('prodId');
    let date = new Date();
    axios.post(`${BASE_URL}/api/products/${productId}/comments/`,
    {
      comment:newComment,
      date:`${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()}`,
      product:productId,
      user_name:localStorage.getItem('current_username')
    }
    ).then(res => {
        getComments();
        setNewComment('');
    })
  }


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
          <div>
          </div>
          
        </div>
        <div className='mt-[40px] flex justify-center'>
            <div className='w-[950px] py-[14px] px-[20px] bg-[white] border-[1px]'>
                  <h1 className='leading-[1.2] text-[24px] pt-[10px] pb-[20px]'>
                    Отзывы о товаре {product.name}
                  </h1>
                  <div className='p-[10px]'>
                     <h2>
                        Добавление комментария
                     </h2>
                     <br />
                     <textarea  placeholder='Содержание комментария' className='w-[500px] h-[100px] p-[10px] border-[1px]' value={newComment} onChange={onChangeNewComment}/>
                     <br />
                     <button className='py-[8px] px-[20px] bg-[#0089D0] text-white hover:cursor-pointer hover:opacity-[0.95]' onClick={addComment}>
                        Опубликовать
                     </button>
                  </div>
                  <div  className='h-[1px] bg-[#F0F0F0] w-[100%] mb-[14px]'/>
                  {
                    comments.map(comment => {
                      return (
                        <div className='py-[21px] min-h-[50px] flex border-b-[1px] border-[#F0F0F0]'>
                          <div className='w-[230px]'>
                          <div className='text-[14px]'>
                             {comment.user_name}
                          </div>
                          <div className='text-[14px] text-[#CCCCCC]'>
                              {comment.date}
                          </div>
                        </div>
                        <div className='text-[14px]'>
                          <span className='font-semibold pr-[5px]'>
                              Комментарий:  
                          </span>
                              {comment.comment}
                          </div>
                        </div>
                      )
                    })
                  }
            </div>    
        </div>
      </>
  )
}

export default PDP