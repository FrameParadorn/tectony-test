import ProductSlideImage from '../components/product-slide-image';
import ProductContent from '../components/product-content';
import ProductDescirption from '../components/product-description';
import ProductRelated from '../components/product-related';
import Cart from '../components/cart'

import { connect } from 'react-redux'


function Home({ cartOpen }) {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-6">
            <ProductSlideImage />
          </div>
          <div className="col-12 col-md-6 pt-5 pt-md-0 ps-md-5">
            <ProductContent />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ProductDescirption />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ProductRelated />
          </div>
        </div>
      </div>
        
      {cartOpen ? <Cart /> : null}
      
    </>
  );
}


const mapStateToProps = state => ({
  cartOpen: state.cart.cartOpen
})


export default connect(mapStateToProps)(Home)
