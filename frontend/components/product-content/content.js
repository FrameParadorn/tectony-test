import React from 'react';
import StarRatings from 'react-star-ratings';
import NumberFormat from 'react-number-format';

import { connect } from 'react-redux'

function content({product}) {

  if (!product) return <div>Loading...</div>;

  return (
    <div className="box-content">
      <h1>{ product.name }</h1>
      <StarRatings rating={product.rate} starRatedColor="#ca9909" starDimension="25" starSpacing="2px" numberOfStars={5} name="rating" />

      <h2 className="mt-5">
        <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} suffix={" บาท"}/>
      </h2>

      <style jsx>
        {`
          .box-content {
            padding: 0 10px;
          }
        `}
      </style>
    </div>
  );
}

const mapStateToProps = (state) => ({
  product: state.product.product || {},
});

export default connect(mapStateToProps)(content);
