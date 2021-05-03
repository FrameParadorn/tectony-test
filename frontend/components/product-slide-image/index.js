import React, {useState} from 'react';
import MainImage from './main-image';
import SlideImage from './slide-image';

import {connect} from 'react-redux';

function index({product}) {
  const [imageIndicator, setImageIndicator] = useState(0);

  if (!product || !product.images) return <div>Loading...</div>;

  const { images } = product

  return (
    <div>
      <MainImage image={images[imageIndicator]} />
      <SlideImage images={images} onSetImageIndicator={setImageIndicator} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  product: state.product.product || {},
});

export default connect(mapStateToProps)(index);
