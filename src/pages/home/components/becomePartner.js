import cartLogo from '../../../assets/cart.svg';
import kaspiPayLogo from '../../../assets/kaspipay_icon.svg';
const BecomePartner = () => {
    return (
        // Пишите свой код здесь 
    <div className='partner'> 
        <div className='partner_title'>Стать партнером</div>
        <div className='columns-partner'>
            <div className='columns-partner-item'>
                <div className='columns-partner-item-heading'>
                    Продавать в Интернет-магазине на Kaspi.kz
                    <img className='w-[70px] h-[70px]' src = {cartLogo} alt = ''/>
                </div>
                <p>Около 11 млн покупателей, 
доставка товаров по всему Казахстану, возможность продавать в кредит и рассрочку.</p>
                <div className='flink'><a href="https://kaspi.kz/shop/merchant/registration/#!/landing" className='text-[#0089D0]'>Начать продавать в Интернет-магазине</a></div>
            </div>
            <div className='columns-partner-item'>
                <div className='columns-partner-item-heading'>
                    Продавать c Kaspi Pay
                    <img className='w-[70px] h-[70px]' src = {kaspiPayLogo} alt = ''/>
                </div>
                <p>Принимайте оплату с Kaspi Gold, Red и Kredit. Откройте счет онлайн бесплатно 
и получите мобильный POS за 5 минут.</p>
                <div className='slink'><a href="https://kaspi.kz/kaspipay" className='text-[#0089D0]'>Начать продавать с Kaspi Pay</a></div>
            </div>
        </div>

    </div>
    // <div className='h-[200px] bg-[#F0F0F0] flex justify-center'>
    //     <div className='w-[1200px] flex justify-between'>
    //         <div className='flex items-center'>
    //             <img className='w-[760px] h-[160px]' src = {cartLogo} alt = '' />
    //         </div>
    //         <div className='flex items-end'>
    //             <img className='w-[290px] h-[350px]' src = {kaspiPayLogo} alt = ''/>
    //         </div>
    //     </div>
    // </div>

    )
}
export default BecomePartner;