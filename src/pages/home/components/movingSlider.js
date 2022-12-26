import { useState } from 'react';
import service1 from '../../../assets/service-1.svg';
const images = [
    {
        title:'Магазин',
        text:'Покупки в рассрочку с бесплатной доставкой',
        img: service1,
        buttonAction:'Купить'
    },
    {
        title:'Магазин',
        text:'Покупки в рассрочку с бесплатной доставкой',
        img: service1,
        buttonAction:'Купить'
    },
    {
        title:'Магазин',
        text:'Покупки в рассрочку с бесплатной доставкой',
        img: service1,
        buttonAction:'Купить'
    },
    {
        title:'Магазин',
        text:'Покупки в рассрочку с бесплатной доставкой',
        img: service1,
        buttonAction:'Купить'
    },
    {
        title:'Магазин',
        text:'Покупки в рассрочку с бесплатной доставкой',
        img: service1,
        buttonAction:'Купить'
    },
    {
        title:'Магазин',
        text:'Покупки в рассрочку с бесплатной доставкой',
        img: service1,
        buttonAction:'Купить'
    },
    {
        title:'Магазин',
        text:'Покупки в рассрочку с бесплатной доставкой',
        img: service1,
        buttonAction:'Купить'
    },
    {
        title:'Магазин',
        text:'Покупки в рассрочку с бесплатной доставкой',
        img: service1,
        buttonAction:'Купить'
    },

]

const MovingSlider = () => {
    return (
        <div className="mt-[100px]">
            <h1 className="mb-[36px] text-[50px] text-center font-bold">Сервисы Kaspi.kz</h1>
            <div className=" flex items-center justify-center">
        <div className="w-[200%] h-[424px] overflow-hidden relative">
          <div className="w-[200%] h-[424px] flex items-center justify-around absolute z-[-1] left-0 animate gap-5 animate">
            {images.map((i) => {
              return (
                <div className='rounded-[16px] bg-white auto-slider-item'>
                    <div className='px-[40px] pt-[40px] text-[20px] leading-[1.2]'>
                        {i.title}
                    </div>
                    <div className='mt-[24px] pl-[40px] w-[290px] font-medium text-[26px] leading-[1.2] h-[137px]'>
                        {i.text}
                    </div>
                    <div className='auto-slider-block-with-img'>
                        <img src = {i.img} alt = '' className='rounded-[16px]'/>
                        <div className='hidden w-[290px] h-[154px] flex justify-center pt-[94px] px-[40px]'>
                            <button className='bg-[#0089D0] flex py-[8px] justify-center w-[210px] leading-[1.2] text-white font-medium text-[20px] rounded-[10px]'>
                                {i.buttonAction}
                            </button>
                        </div>
                    </div>
                </div>
              );
            })}
            {images.map((i) => {
              return (
                <div className='rounded-[16px] bg-white auto-slider-item'>
                    <div className='px-[40px] pt-[40px] text-[20px] leading-[1.2]'>
                        {i.title}
                    </div>
                    <div className='mt-[24px] pl-[40px] w-[290px] font-medium text-[26px] leading-[1.2] h-[137px]'>
                        {i.text}
                    </div>
                    <div className='auto-slider-block-with-img'>
                        <img src = {i.img} alt = '' className='rounded-[16px]'/>
                        <div className='hidden w-[290px] h-[154px] flex justify-center pt-[94px] px-[40px]'>
                            <button className='bg-[#0089D0] flex py-[8px] justify-center w-[210px] leading-[1.2] text-white font-medium text-[20px] rounded-[10px]'>
                                {i.buttonAction}
                            </button>
                        </div>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    )
}

export default MovingSlider;