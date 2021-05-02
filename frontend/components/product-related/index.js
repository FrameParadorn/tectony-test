import ProductItem from './product-item'
import {Swiper, SwiperSlide} from 'swiper/react';
export default function () {
  return (
    <div className="mt-5">
      <h6 className="mb-3 font-weight-bold"><b>RELATED PRODUCTS</b></h6>
      <Swiper spaceBetween={50} slidesPerView={4}>
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
