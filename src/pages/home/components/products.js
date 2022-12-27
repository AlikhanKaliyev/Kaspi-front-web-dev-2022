import '../../../style/pages/home.scss';
import goldLogo from '../../../assets/gold.svg';
import RedLogo from '../../../assets/red.svg';
import KreditLogo from '../../../assets/kredit.svg';
import depositLogo from '../../../assets/deposit.svg';
import KN_entrepLogo from '../../../assets/KN_entrep.svg';
import KNLogo from '../../../assets/KN.svg';
const Products = () => {
    return (
        // Пишите свой код здесь 
        <div className="products">
            <div className="products-title">
                Продукты Kaspi.kz
            </div>
            <div className="columns-products">
                <div className="columns-product">
                    <div className="columns-product-title">
                        Kaspi gold
                    </div>
                    <div className="columns-product-detail">
                        <div className="columns-product-detail-description">
                            Переводы,
                            <br />
                            платежи, снятия
                            <br />
                            без комисии
                        </div>
                        <div className="columns-product-detail-image">
                            <img className='w-[90px] h-[80px]' src={goldLogo} alt='' />
                        </div>
                    </div>
                    <div className="columns-product-link">
                        <a href="https://kaspi.kz/gold">Открыть Kaspi Gold онлайн</a>
                    </div>
                </div>
                <div className="columns-product">
                    <div className="columns-product-title">
                        Kaspi Red
                    </div>
                    <div className="columns-product-detail">
                        <div className="columns-product-detail-description">
                            Покупки в рассрочку 0%
                            <br />
                            в магазинах Вашего
                            <br />
                            города
                        </div>
                        <div className="columns-product-detail-image">
                            <img className='w-[90px] h-[80px]' src={RedLogo} alt='' />
                        </div>
                    </div>
                    <div className="columns-product-link">
                        <a href="https://kaspi.kz/kaspired">Открыть Kaspi Red онлайн</a>
                    </div>
                </div>
                <div className="columns-product">
                    <div className="columns-product-title">
                        Kaspi gold
                    </div>
                    <div className="columns-product-detail">
                        <div className="columns-product-detail-description">
                            Деньги на карманные
                            <br />
                            расходы и контроль
                            <br />
                            трат
                        </div>
                        <div className="columns-product-detail-image">
                            <img className='w-[90px] h-[80px]' src={goldLogo} alt='' />
                        </div>
                    </div>
                    <div className="columns-product-link">
                        <a href="https://kaspi.kz/goldkid">Открыть Kaspi Gold для ребенка</a>
                    </div>
                </div>
                <div className="columns-product">
                    <div className="columns-product-title">
                        Kaspi gold
                    </div>
                    <div className="columns-product-detail">
                        <div className="columns-product-detail-description">
                            Кредит или
                            <br />
                            рассрочка 0%.
                            <br />
                            Одобрение за 1 минуту.
                        </div>
                        <div className="columns-product-detail-image">
                            <img className='w-[90px] h-[80px]' src={KreditLogo} alt='' />
                        </div>
                    </div>
                    <div className="columns-product-link">
                        <a href="https://kaspi.kz/purchase">Открыть Кредит на покупки</a>
                    </div>
                </div>
                <div className="columns-product">
                    <div className="columns-product-title">
                        Kaspi gold
                    </div>
                    <div className="columns-product-detail">
                        <div className="columns-product-detail-description">
                            Снятие и пополнение
                            <br />
                            без комиссии. Сумма
                            <br />
                            депозита от 1000тг.
                        </div>
                        <div className="columns-product-detail-image">
                            <img className='w-[90px] h-[80px]' src={depositLogo} alt='' />
                        </div>
                    </div>
                    <div className="columns-product-link">
                        <a href="https://kaspi.kz/deposit">Открыть Kaspi Депозит</a>
                    </div>
                </div>
                <div className="columns-product">
                    <div className="columns-product-title">
                        Kaspi gold
                    </div>
                    <div className="columns-product-detail">
                        <div className="columns-product-detail-description">
                            До 2 млн тенге.
                            <br />
                            Без залога
                            <br />
                            и документов.
                        </div>
                        <div className="columns-product-detail-image">
                            <img className='w-[90px] h-[80px]' src={KN_entrepLogo} alt='' />
                        </div>
                    </div>
                    <div className="columns-product-link">
                        <a href="https://kaspi.kz/cashkreditbiz">Открыть Кредит для ИП</a>
                    </div>
                </div>
                <div className="columns-product">
                    <div className="columns-product-title">
                        Kaspi gold
                    </div>
                    <div className="columns-product-detail">
                        <div className="columns-product-detail-description">
                            Одобрение онлайн за 
                            <br />
                            1 минуту. Снятие денег
                            <br />
                            в банкомате.
                        </div>
                        <div className="columns-product-detail-image">
                            <img className='w-[90px] h-[80px]' src={KNLogo} alt='' />
                        </div>
                    </div>
                    <div className="columns-product-link">
                        <a href="https://kaspi.kz/cashkredit">Получить Кредит Наличными</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products;