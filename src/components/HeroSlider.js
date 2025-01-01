import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper';

import Img1 from '../assets/img/heroSlider/1.jpg';
import Img2 from '../assets/img/heroSlider/2.jpg';
import Img3 from '../assets/img/heroSlider/3.jpg';

const slides = [
  {
    title: 'Your Luxury Hotel For Vacation',
    Bg: Img1,
    btnText: 'see our rooms',
  },
  {
    title: 'Your Luxury Hotel For Vacation',
    Bg: Img2,
    btnText: 'see our rooms',
  },
  {
    title: 'Your Luxury Hotel For Vacation',
    Bg: Img3,
    btnText: 'see our rooms',
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="heroSlider h-[600px] lg:h-[860px]"
    >
      {slides.map((slide, index) => {
        const { title, Bg, btnText } = slide;
        return (
          <SwiperSlide key={index} className="h-full relative flex items-center justify-center ">
              <div className='z-20 text-white text-center'>
                <div className='uppercase font-tertiary tracking-[6px] mb-5'>
                  Just enjoy & Relax
                </div>
                <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] mb-6'>
                  {title}
                </h1>
                <button className='btn btn-lg btn-primary mx-auto'>
                  {btnText}
                </button>
              </div>
              <div className='absolute top-0 w-full h-full '>
                  <img className='object-cover w-full h-full' src={Bg} alt='' />
                </div>
              <div className='absolute w-full h-full bg-black/70'></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
