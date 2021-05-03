import ProductItem from './product-item';
import {Swiper, SwiperSlide} from 'swiper/react';

import {connect} from 'react-redux';

function ProductRelated({productRelated}) {
  const swiperBreakPoints = {
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
  };

  if(!productRelated) return <div>Loading...</div>

  return (
    <div className="mt-5">
      <h6 className="mb-3 font-weight-bold">
        <b>RELATED PRODUCTS</b>
      </h6>
      <Swiper spaceBetween={50} slidesPerView={4} breakpoints={swiperBreakPoints}>
        {productRelated.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productRelated: state.product.productRelated,
});

export default connect(mapStateToProps)(ProductRelated);
