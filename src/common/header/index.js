import Logo from '../../assets/Logo.svg';
import Business from './components/business';
import Clients from './components/clients';
import KaspiGid from './components/KaspiGid';
import { useNavigate } from "react-router";
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="w-[100vw] bg-white h-[75px] flex justify-center header-box-shadow fixed z-[19] top-[0px]">
            <div className="w-[1200px] py-[20px] flex">
                <img src = {Logo} alt ='' className='h-[33px] w-[141px]' onClick={() => {navigate('/')}}/>
                <ul className='list-none flex text-[17px] text-[#00000066] ml-[285px]'>
                    <li className='flex items-center mr-[64px] hover:text-black hover:cursor-pointer relative header-nav-item transition duration-[400ms]'>
                        Клиентам
                        <Clients />
                    </li>
                    <li className='flex items-center mr-[64px] hover:text-black hover:cursor-pointer relative header-nav-item'>
                        Бизнесу
                        <Business />
                    </li>
                    <li className='flex items-center mr-[64px] hover:text-black hover:cursor-pointer relative header-nav-item'>
                        Kaspi Гид
                        <KaspiGid />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;