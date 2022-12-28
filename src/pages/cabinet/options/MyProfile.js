import InputMask from 'react-input-mask';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../constants';
const inputStyle = 'w-[100%]  text-[20px] h-[50px] border-solid border-[1px] border-[#F0F0F0] pl-[10px]';
const PhoneInput= (props) => {
    return (
        <InputMask 
        className= {inputStyle}
          mask='7 999 999-99-99'
          placeholder='+7 ___-___-__-__'
          maskPlaceholder={null}
          value={props.value} 
          onChange={props.onChange}>
        </InputMask>
      );
}
const validPhones = ['700','701','702','705','707','708','747','750','751','760','761','762','763','764','771','775','776','777','778']

const validatePhone = (phone) => {
    return validPhones.includes(phone.substr(1,3));
}

const MyProfile = () => {
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [username,setUsername] = useState('');
    const [usernameError,setUsernameError] = useState('');
    const [file,setFile] = useState('');
    const handleInput = ({ target: { value } }) =>
    {   
        let onlyNumbersValue = value.replace(/\D/g, "");
        if((onlyNumbersValue[1] !== '7' && onlyNumbersValue.length > 1) || (onlyNumbersValue.length > 3 && !validatePhone(onlyNumbersValue))) {
            setPhoneError('Неподдерживаемый оператор');
            setPhone(value);
        } else {
            setPhoneError('');
            setPhone(value);
        }
    }
    useEffect(()=> {
        axios.get(`${BASE_URL}/api/user/${localStorage.getItem('current_user_id')}`).then(
            (res) => {
                setPhone(res.data.phone_number);
                setUsername(res.data.username);
            }
        )
    },[])
    const onChangeFile = (e) => {
        setFile(e.target.files[0].name);
    }
    const onChangePassword = (e) =>{
        setPassword(e.target.value);
    }
    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }  
    const onSubmit = () => {
        let phoneCheck = phone.replace(/\D/g, "");
        let error = false;
        if(username.trim().length   === 0) {
            error = true;
            setUsernameError('Имя пользователя не заполнено')
        }
        if(!validPhones.includes(phoneCheck.substr(1,3))) {
            error = true;
            setPhoneError('Неподдерживаемый оператор');
        }
        if(phoneCheck.length !== 11) {
            error = true;
            setPhoneError('Номер заполнен не полностью');
        }
        if(password.trim().length === 0) {
            error = true;
            setPasswordError('Пароль не заполнен');
        }
        if(error) {
            return;
        }
        axios.patch(`${BASE_URL}/api/user/${localStorage.getItem('current_user_id')}/`,
            {
                username,
                password,
                phone_number:phoneCheck
            }
        )
    }
    return (
        <div className='p-[20px]'>
            <h1 className='text-[30px] leading-[1.2] font-semibold mb-[20px]'>
                Мой профиль
            </h1>
            <div>
                <div className="w-[30%]">
                    <div className="text-[15px] leading-[1.2] font-medium mb-[10px]">
                        Изменить имя
                    </div>
                    <input type='text' placeholder='Введите свое имя' value={username} onChange={onChangeUsername} className = {inputStyle}/>
                    <div className="text-red-500 mb-[10px] text-[12px] h-[18px]">
                        {usernameError}
                    </div>
                </div>
                <div className="w-[30%]">
                    <div className="text-[15px] leading-[1.2] font-medium mb-[10px]">
                        Изменить номер телефона
                    </div>
                    <PhoneInput value={phone}  onChange={handleInput} onClick = {()=>{setPhoneError('')}} />
                    <div className="text-red-500 mb-[10px] text-[12px] h-[18px]">
                        {phoneError}
                    </div>
                </div>
                <div className="w-[30%]">
                    <div className="text-[15px] leading-[1.2] font-medium mb-[10px]">
                        Изменить пароль
                    </div>
                    <input type = 'password' placeholder="Пароль" className={inputStyle} value ={password} onChange={onChangePassword}/>
                    <div className="text-red-500 mb-[10px] text-[12px] h-[18px]">
                        {passwordError}
                    </div>
                </div>
                <div className="w-[30%]">
                    <div className="text-[15px] leading-[1.2] font-medium mb-[10px]">
                        Аватар
                    </div>
                    <input type = 'file' onChange={onChangeFile} value={file}/>
                    <div className="text-red-500 mb-[10px] text-[12px] h-[18px]">
                    </div>
                </div>
                <div className="text-[20px] w-[30%] mt-[10px]">
                    <button className="py-[8px] text-center w-[100%] bg-[#0089D0] hover:opacity-[0.95] text-white" onClick={onSubmit}>
                        Изменить данные
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;