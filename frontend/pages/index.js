import ProductSlideImage from '../components/product-slide-image'
import ProductContent from '../components/product-content'
import ProductDescirption from '../components/product-description'

export default function Home() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <ProductSlideImage />
        </div>
        <div className="col-6">
          <ProductContent />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ProductDescirption />
        </div>
      </div>
    </div>
  )
}
