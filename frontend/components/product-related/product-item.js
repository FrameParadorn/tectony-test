import StarRatings from 'react-star-ratings';
import NumberFormat from 'react-number-format';

export default function ProductItem() {
  return (
    <>
      <div className="product-card">
        <div className="product-card-img">
          <img src="https://source.unsplash.com/WLUHO9A_xik/1600x900" />
        </div>
        <h6 className="mt-2">HEPA Circulation Unit</h6>
        <span>เครื่องกรองอากาศควบคุมเชื้อ</span>
        <div>
          <StarRatings rating={5} starRatedColor="rgb(202, 153, 9)" numberOfStars={5} name="rating" starDimension="20" starSpacing="2px" />
        </div>
        <div className="price mt-3">
          <NumberFormat value={245698} displayType={'text'} thousandSeparator={true} suffix={' บาท'} />
        </div>
      </div>

      <style jsx>
        {`
          .product-card-img {
            width: 100%;
            height: 340px;
          }

          .product-card h6 {
            color: #4184e6;
          }

          .product-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .product-card .price {
            color: red;
          }
        `}
      </style>
    </>
  );
}
