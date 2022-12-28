import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
const Cabinet = () => {
    const [currentRoute, setCurrentRoute] = useState('bank');
    const navigate = useNavigate();
    const selectCurrentRoute = (route) => {
        setCurrentRoute(route);
        navigate(`/cabinet/${route}`)
    }
    useEffect(()=>{
        if(!localStorage.getItem('token') || !localStorage.getItem('current_user_id')) {
            navigate('/login');
        }
    },[])
    const leave = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('current_user_id');
        navigate('/');
    }
    return (
        <div className="mt-[75px] p-[20px]">
            <div className="">
                <div className="flex justify-between text-[20px]">
                    <div className="flex">
                        <div className = {`p-[20px] hover:cursor-pointer ${currentRoute == 'bank' ? 'bg-[#0089D0] text-white' : ' bg-white border-[1px]' }`} onClick={ () => {selectCurrentRoute('bank')}}>
                            Мой банк
                        </div>
                        <div className = {`p-[20px] hover:cursor-pointer ${currentRoute == 'transactions' ? 'bg-[#0089D0] text-white' : ' bg-white border-[1px]' }`} onClick={ () => {selectCurrentRoute('transactions')}}>
                            Переводы
                        </div>
                        <div className = {`p-[20px] hover:cursor-pointer ${currentRoute == 'payments' ? 'bg-[#0089D0] text-white' : ' bg-white border-[1px]' }`} onClick={ () => {selectCurrentRoute('payments')}}>
                            Мои платежи
                        </div>
                        <div className = {`p-[20px] hover:cursor-pointer ${currentRoute == 'profile' ? 'bg-[#0089D0] text-white' : ' bg-white border-[1px]' }`} onClick={ () => {selectCurrentRoute('profile')}}>
                            Мой профиль
                        </div>
                    </div>
                    <div className="p-[20px] hover:cursor-pointer bg-white border-[1px]" onClick={() => {leave()}}>
                        Выйти
                    </div>
                </div>
                <div className="bg-white h-[600px] border-[1px] p-[20px]">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default Cabinet;