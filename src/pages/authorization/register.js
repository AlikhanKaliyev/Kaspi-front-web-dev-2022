import axios from 'axios';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import {BASE_URL} from '../../constants';
const inputStyle = 'w-[100%] h-[35px] border-solid border-[1px] border-[#F0F0F0] pl-[10px]';
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

const Register = () => {
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [password1Error, setPassword1Error] = useState('');
    const [phone,setPhone] = useState('');
    const [username,setUsername] = useState('');
    const [usernameError,setUsernameError] = useState('');
    const [password,setPassword] = useState('');
    const [password1,setPassword1] = useState('');
    const navigate = useNavigate();
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
    const onChangePassword = (e) =>{
        setPassword(e.target.value);
    }
    const onChangePassword1 = (e) =>{
        setPassword1(e.target.value);
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
        if(password1.trim().length === 0) {
            error = true;
            setPassword1Error('Пароль не заполнен');
        } else if(password1 != password){
            error = true;
            setPassword1Error('Пароли не совпадают');
        }
        if(error) {
            return;
        }
        axios.post(`${BASE_URL}/api/user/`,
            {
                "username":username,
                "phone_number":phoneCheck,
                "password":password1
            }
        ).then(res => {
            navigate('/login');
        }).catch((e) => {
            if(e.response.data.phone_number){
                setPhoneError('Такой номер телефона уже зарегистрирован');
            }
            if(e.response.data.username){
                setUsernameError('Пользователь с таким именем уже зарегистрирован');
            }
        })
    }
    return (
        <div className="mt-[75px] h-[calc(100vh-75px)] flex justify-center pt-[100px]">
            <div className="w-[450px] h-[550px] bg-white border-solid border-[1px] border-[#F0F0F0] flex flex-col items-center p-[20px]">
                <h1 className="text-[23px] leading-[1.2] font-medium mb-[20px]">
                    Регистрация
                </h1>
                <div className="w-[75%]">
                    <div className="text-[15px] leading-[1.2] font-medium mb-[10px]">
                        Ваше имя
                    </div>
                    <input type='text' placeholder='Введите свое имя' value={username} onChange={onChangeUsername} className = {inputStyle}/>
                    <div className="text-red-500 mb-[10px] text-[12px] h-[18px]">
                        {usernameError}
                    </div>
                </div>
                <div className="w-[75%]">
                    <div className="text-[15px] leading-[1.2] font-medium mb-[10px]">
                        Номер телефона
                    </div>
                    <PhoneInput value={phone}  onChange={handleInput} onClick = {()=>{setPhoneError('')}} />
                    <div className="text-red-500 mb-[10px] text-[12px] h-[18px]">
                        {phoneError}
                    </div>
                </div>
                <div className="w-[75%]">
                    <div className="text-[15px] leading-[1.2] font-medium mb-[10px]">
                        Желаемый пароль
                    </div>
                    <input type = 'password' placeholder="Введите свой номер телефона" className={inputStyle} value ={password} onChange={onChangePassword}/>
                    <div className="text-red-500 mb-[10px] text-[12px] h-[18px]">
                        {passwordError}
                    </div>
                </div>
                <div className="w-[75%]">
                    <div className="text-[15px] leading-[1.2] font-medium mb-[10px]">
                        Повторите пароль
                    </div>
                    <input type = 'password' placeholder="Введите свой номер телефона" className={inputStyle} value ={password1} onChange={onChangePassword1}/>
                    <div className="text-red-500 mb-[10px] text-[12px] h-[18px]">
                        {password1Error}
                    </div>
                </div>
                <div className="text-[20px] w-[75%] mt-[10px]">
                    <button className="py-[8px] text-center w-[100%] bg-[#0089D0] hover:opacity-[0.95] text-white" onClick={onSubmit}>
                        Зарегистрироваться
                    </button>
                </div>
                <a className='text-[15px] text-[#0089D0] mt-[5px]' onClick={ () => {navigate('/login')}}>
                    Уже зарегистрированы ?
                </a>
            </div>
        </div>
    )
}

export default Register;