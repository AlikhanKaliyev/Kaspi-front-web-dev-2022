import mainLogo from '../../../assets/main_logo.svg';
import iphoneLogo from '../../../assets/phone-3x-n.png';
const Banner = () => {
    return (
        <div className='h-[400px] bg-[#F0F0F0] flex justify-center'>
            <div className='w-[1200px] flex justify-between'>
                <div className='flex items-center'>
                    <img className='w-[760px] h-[160px]' src = {mainLogo} alt = '' />
                </div>
                <div className='flex items-end'>
                    <img className='w-[290px] h-[350px]' src = {iphoneLogo} alt = ''/>
                </div>
            </div>
        </div>
    )
}

export default Banner;