const ShopHeader = () => {
    return (
        <>
          <div className="shop__search">
              <div className="shop__search-bar">
                  <span className="shop__shop-title">Магазин</span>
                  <input type="text" className="shop__input" placeholder="Поиск товара"/>
                  <button className="shop__search-icon">
                      <img src="https://resources.cdn-kaspi.kz/shop/front/sa/stable/desktop/images/xsmall-search.png.pagespeed.ic.v-J1oPi1Jy.png" />
                  </button>
              </div>
              <div className="shop__city">
                  <span>Мой город</span>
                  <span className="shop__link-under">Алматы</span>
              </div>
          </div>
          <div className="shop__categories">
              <span className="shop__categories-link">
                  Все категории
              </span>
              <span className="shop__categories-link">
                  Спорт,<br />туризм
              </span>
              <span className="shop__categories-link">
                  Красота,<br />здоровье
              </span>
              <span className="shop__categories-link">
                  Автотовары
              </span>
              <span className="shop__categories-link">
                  Детские<br />товары
              </span>
              <span className="shop__categories-link">
                  Компьютеры
              </span>
              <span className="shop__categories-link">
                  Строительство,<br /> ремонт
              </span>
              <span className="shop__categories-link">
                  Одежда
              </span>
              <span className="shop__categories-link">
                  Аксессуары
              </span>
          </div>
        </>
    )
}

export default ShopHeader;