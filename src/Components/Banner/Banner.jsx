import React from 'react';
import './Banner.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper container"
    >
      <SwiperSlide>
        <img className='container' src="https://ae01.alicdn.com/kf/Saaaa022e60694a368ec748dadcfdd0a6k/1790x572.png" alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://pics.craiyon.com/2023-09-17/3d325306014347fd9bc9a41861c06293.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.motortrend.com/uploads/2021/09/001-chevy-camaro-driver-front-three-quarter.jpg?w=768&width=768&q=75&format=webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.carscoops.com/wp-content/uploads/2019/12/brabus-700-mercedes-amg-g63-widestar-fostla-tuning-0-1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://lionmotors.uz/wp-content/uploads/2020/11/malibumin4-600x360.jpg" alt="" />
      </SwiperSlide>
   
    </Swiper>
  );
}

export default Banner;
