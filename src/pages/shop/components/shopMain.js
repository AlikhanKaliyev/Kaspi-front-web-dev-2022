import { links1, links2 } from '../constants';
import { Link } from 'react-router-dom';

const ShopMain = () => {
  return (
      <>
        <div className="shop__banner-img">
            <img src="https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h75/hd6/27943518502942/dks.png" />
        </div>
        <div className="shop__categories-blocks">
            <div className="shop__blocks-first">
                {links1.map((link) => (
                  <Link to={`plp?cat=${link.catId}`} className="link">
                    <div className="shop__block-card">
                        <span>{link.title}</span>
                        <img src={link.img} />
                    </div>
                  </Link>
                ))}
            </div>
            <div className="shop__blocks-second">
                {links2.map((link) => (
                    <div className="shop__block-card">
                        <span>{link.title}</span>
                        <img src={link.img} />
                    </div>
                ))}
            </div>
        </div>
      </>
  )
}

export default ShopMain;