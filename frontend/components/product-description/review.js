import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import ReviewItem from './review-item';
import {connect} from 'react-redux';

function review({product}) {
  if (!product || !product.review) return <div>Loading...</div>;

  const reviews = product.review;

  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={2}>
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewItem review={review}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const mapStateToProps = (state) => ({
  product: state.product.product || {},
});

export default connect(mapStateToProps)(review);
