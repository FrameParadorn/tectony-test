import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import ReviewItem from './review-item';

function review({}) {
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={2}>
        <SwiperSlide>
          <ReviewItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default review;
