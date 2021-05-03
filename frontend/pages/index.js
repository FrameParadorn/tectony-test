import { useEffect } from 'react'
import ProductSlideImage from '../components/product-slide-image';
import ProductContent from '../components/product-content';
import ProductDescirption from '../components/product-description';
import ProductRelated from '../components/product-related';
import Cart from '../components/cart'

import { connect } from 'react-redux'
import { loadProductOne, loadProductRelated } from '../redux/actions/product.action'


function Home({ dispatch, cartOpen }) {

  useEffect(async () => {
    const productId = "608dad3f519257774007d693" 
    dispatch(await loadProductOne(productId)) 
    dispatch(await loadProductRelated(productId)) 
  }, [])

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
