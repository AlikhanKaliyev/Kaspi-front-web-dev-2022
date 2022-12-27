import { useState } from 'react';
import arrow from '../../../assets/left-arrow.png';
import phone from '../../../assets/Phone.png';
const sliders = [

    [
        {
            title:'Телефоны, гаджеты',
            img:phone
        },
        {
            title:'Спорт, Туризм',
            img:require('../../../assets/Sport1.png')
        },
        {
            title:'Компьютеры',
            img:require('../../../assets/Computer.png')
        },
        {
            title:'Красота, здоровье',
            img:require('../../../assets/Beauty1.png')
        },
        {
            title:'Обувь',
            img:require('../../../assets/Shoes1.png')
        },
        {
            title:'Товары для животных',
            img:require('../../../assets/Animals.png')
        },
        {
            title:'Одежда',
            img:require('../../../assets/Clothes1.png')
        },
        {
            title:'Подарки, товары для праздников',
            img:require('../../../assets/Holidays.png')
        },
        {
            title:'Украшения',
            img:require('../../../assets/Jewelry.png')
        },
        {
            title:'ТВ, Аудио, Видео',
            img:require('../../../assets/TV.png')
        },
    ],

    [
        {
            title:'Автотовары',
            img:require('../../../assets/Avto.png')
        },
        {
            title:'Досуг, книги',
            img:require('../../../assets/Hobby.png')
        },
        {
            title:'Мебель',
            img:require('../../../assets/Furniture1.png')
        },
        {
            title:'Канцелярские товары',
            img:require('../../../assets/Stat.png')
        },
        {
            title:'Супермаркеты',
            img:require('../../../assets/Grocery.png')
        },
        {
            title:'Товары для дома и дачи',
            img:require('../../../assets/Home.png')
        },
        {
            title:'Строительство, ремонт',
            img:require('../../../assets/Hard.png')
        },
        {
            title:'Детские товары',
            img:require('../../../assets/Kids.png')
        },
        {
            title:'Аптеки',
            img:require('../../../assets/Pharmcy.png')
        },
        {
            title:'Бытовая техника',
            img:require('../../../assets/HomeApp.png')
        },
    ],

    [
        {
            title:'Аксессуары',
            img:require('../../../assets/Accessories.png')
        },
        {
            title:'Акции',
            img:require('../../../assets/Gifts1.png')
        },
    ],
]

const OnlineShop = () => {
    const [currentSlider,setCurrenSlider] = useState(0);
    const changeSliderRight = () => {
        if( currentSlider === 2 ) {
            setCurrenSlider(0);
        } else {
            setCurrenSlider(currentSlider+1);
        }
    }
    const changeSliderLeft = () => {
        if(currentSlider === 0) {
            setCurrenSlider(2);
        } else {
            setCurrenSlider(currentSlider-1);
        }
    }
    return (
        <div className="mt-[90px]">
            <h1 className="mb-[36px] text-[50px] text-center font-bold">Сервисы Kaspi.kz</h1>
            <div className="flex h-[550px] justify-center">
                <div className="w-[100px] h-[100%] flex items-center justify-center">
                    <span className="h-[60px] w-[60px] rounded-[30px] bg-[#F0F0F0] flex pl-[13px] items-center hover:bg-white" onClick={changeSliderLeft}>
                        <img src={arrow} className='h-[30px]'/>
                    </span>
                </div>
                <div className="w-[1200px] h-[100%]">
                    <div className='grid grid-flow-col gap-y-[15px] gap-x-[24px] grid-cols-5 grid-rows-2'>
                        {sliders[currentSlider].map((item) => {
                                    return (
                                        <div className='w-[220px] h-[260px] bg-white rounded-[16px] p-[20px] flex flex-col justify-between'>
                                            <h1 className='text-[20px] leading-[1.2] text-center'>
                                                {item.title}
                                            </h1>
                                            <img src = { item.img } alt = '' className='w-[180px]'/>
                                        </div>
                                    );
                                }
                            )}
                    </div>
                </div>
                <div className="w-[100px] h-[100%] flex items-center justify-center">
                    <span className="h-[60px] w-[60px] rounded-[30px] bg-[#F0F0F0] flex pl-[13px] items-center hover:bg-white rotate-[180deg]" onClick={changeSliderRight}>
                        <img src={arrow} className='h-[30px]'/>
                    </span>
                </div>
            </div>
        </div>
    )    
}
export default OnlineShop;