import ProductSlideImage from '../components/product-slide-image'
import ProductContent from '../components/product-content'

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
    </div>
  )
}
