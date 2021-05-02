import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

function index({images, onSetImageIndicator}) {
  return (
    <div className="mt-2">
      <Swiper spaceBetween={10} slidesPerView={4} scrollbar={{draggable: true}}>
        {images.map((image, index) => (
          <SwiperSlide onMouseOver={() => onSetImageIndicator(index)} key={index}>
            <img src={image} alt="nike" className="slide-image-item" />
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>
        {`
          .slide-image-item {
            width: 100%;
            cursor: pointer;
          }

          .slide-image-item:hover {
            border: 3px solid red;
          }
          
        `}
      </style>
    </div>
  );
}
export default index;
