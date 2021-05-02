import React from 'react';
import StarRatings from 'react-star-ratings';
import NumberFormat from 'react-number-format';

function content({}) {
  return (
    <div className="box-content">
      <h1>Nike Air Max</h1>
      <StarRatings rating={5} starRatedColor="#ca9909" starDimension="25" starSpacing="2px" numberOfStars={5} name="rating" />

      <h2 className="mt-5">
        <NumberFormat value={245698} displayType={'text'} thousandSeparator={true} suffix={" บาท"}/>
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

export default content;
