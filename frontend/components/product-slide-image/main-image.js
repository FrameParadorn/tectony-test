import React from 'react';
import { AspectRatio } from 'react-aspect-ratio';

function MainImage({ image }) {
  return (
    <div>
      <div className="box-image">
        <img src={image} alt="product" />
      </div>
      <style jsx> {`
        .box-image {
          width: 100%;
          height: 650px;
        }   

        .box-image img{
          width: 100%; 
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      `}
      </style>
    </div>
  );
}
export default MainImage;
