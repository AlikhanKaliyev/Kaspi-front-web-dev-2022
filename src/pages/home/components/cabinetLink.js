import { useNavigate } from "react-router";
const CabinetLink = () => {
    const navigate = useNavigate();
    return (
        <div className="my-[100px] flex justify-center" onClick={() => { navigate('/cabinet') }}>
            <button className="text-[23px] font-semibold text-white text-center px-[30px] py-[10px] bg-[#0089D0] hover:opacity-[0.95]">
                Перейти в личный кабинет
            </button>
        </div>
    )
}

export default CabinetLink;