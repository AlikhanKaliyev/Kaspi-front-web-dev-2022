import SmartPos from '../../../assets/smart-POS-small.png';
import POS_mobapp from '../../../assets/POS_mobapp.png';
import QR from '../../../assets/QR-display.png';
const PaymentWithKaspi = () => {
    return (
        <div className="paymentKaspi">
            <div className="paymentTitle">
                Принимайте оплату с Kaspi Pay
            </div>
            <div className="paymentTypes">
                <div className="paymentType">
                    <div>
                        <img src = {SmartPos} alt=''/>
                    </div>
                    <span>Smart POS</span>
                </div>
                <div className="paymentType">
                    <div>
                        <img src = {POS_mobapp} alt=''/>
                    </div>
                    <span>Мобильный POS</span>
                </div>
                <div className="paymentType">
                    <div>
                        <img src = {QR} alt=''/>
                    </div>
                    <span>QR Дисплей</span>
                </div>
            </div>
            <div className="payment-action">
                <a href="https://kaspi.kz/kaspipay">Принимать оплату с Kaspi Pay</a>
            </div>
        </div>
    )
}

export default PaymentWithKaspi;