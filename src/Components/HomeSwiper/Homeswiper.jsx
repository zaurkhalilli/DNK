import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import styled from "../HomeSwiper/Homeswiper.scss"
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import 'swiper/css';

export default () => {
  return (
  <div className="swiper">
      <Swiper
      spaceBetween={0}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <div className="swiperimg">
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2022/08/client-logo-5.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-3.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2022/08/client-logo-5.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-3.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt="" /></SwiperSlide>
      </div>
    </Swiper>
  </div>
  );
};