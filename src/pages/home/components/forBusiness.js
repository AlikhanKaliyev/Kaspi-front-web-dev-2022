import '../../../style/pages/home.scss';
import kaspiPayLogo from '../../../assets/kaspipay_icon.svg';
import goldLogo from '../../../assets/gold.svg';
import RedLogo from '../../../assets/red.svg';
import KreditLogo from '../../../assets/kredit.svg';
import PhoneImage from '../../../assets/business-phone.png';
import BusinessLogo from '../../../assets/business.svg';
import SalesLogo from '../../../assets/actions-sales.svg';
const ForBusiness = () => {
    return (
        // Пишите свой код здесь 
        <div className="business">
            <div className="business-title">
                Для Бизнеса
            </div>
            <div className="business-content">
                <div className="business-content-left">
                    <div className='business-content-mobapp'>
                        <div className='business-content-mobapp-info'>
                            <img className='w-[90px] h-[80px]' src={kaspiPayLogo} alt='' />
                            <div className='business-content-mobapp-title'>
                                Kaspi Pay. Приложение
                                <br />
                                для бизнеса
                            </div>
                            <div className='business-content-mobapp-details'>
                                <span>Принимайте оплату с</span>
                                <div className="business-content-mobapp-images">
                                    <img className='w-[50px] h-[40px]' src={goldLogo} alt='' />
                                    <img className='w-[50px] h-[40px] ml-[8px]' src={RedLogo} alt='' />
                                    <img className='w-[50px] h-[40px] ml-[8px]' src={KreditLogo} alt='' />
                                </div>
                                <div className='business-content-mobapp-action'>
                                    <a href="https://kaspi.kz/kaspipay" className='business-content-mobapp-button'><h3>Подключиться</h3></a>
                                </div>
                            </div>
                        </div>
                        <div className='business-content-mobapp-image'>
                            <img src={PhoneImage} alt = '' />
                        </div>
                    </div>  
                </div>
                <div className='business-content-right'>
                    <div className='business-content-products'>
                        <div className='columns-product business-content-product-item'>
                            <div className="columns-product-title">
                                Бизнес Кредит
                            </div>
                            <div className="columns-product-detail">
                                <div className="columns-product-detail-description">
                                    Без залога,
                                    <br />
                                    и документов.
                                    <br />
                                    Онлайн за 1 минуту.
                                </div>
                                <div className="columns-product-detail-image">
                                    <img className='w-[90px] h-[80px]' src={BusinessLogo} alt='' />
                                </div>
                            </div>
                            <div className="columns-product-link">
                                <a href="https://kaspi.kz/bizkredit">Подробнее</a>
                            </div>
                        </div>
                        <div className='columns-product business-content-product-item'>
                            <div className="columns-product-title">
                                Акции Kaspi QR
                            </div>
                            <div className="columns-product-detail">
                                <div className="columns-product-detail-description">
                                    Участвуйте в акциях
                                    <br />
                                    и увеличивайте свои
                                    <br />
                                    продажи
                                </div>
                                <div className="columns-product-detail-image">
                                    <img className='w-[90px] h-[80px]' src={SalesLogo} alt='' />
                                </div>
                            </div>
                            <div className="columns-product-link">
                                <a href="https://kaspi.kz/marketingactions">Принять участие</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForBusiness;