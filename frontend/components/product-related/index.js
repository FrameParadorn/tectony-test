import ProductItem from './product-item';
import {Swiper, SwiperSlide} from 'swiper/react';
export default function () {
  return (
    <div className="mt-5">
      <h6 className="mb-3 font-weight-bold">
        <b>RELATED PRODUCTS</b>
      </h6>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        breakpoints={{
          0: {
            width: 0,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          991: {
            width: 991,
            slidesPerView: 3,
          },
          1192: {
            width: 1192,
            slidesPerView: 4,
          },
        }}>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
