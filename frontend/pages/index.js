import styles from '../styles/Home.module.css'
import ProductSlideImage from '../components/product-slide-image'

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <ProductSlideImage />
        </div>
        <div className="col-6">
          HEPA Circulation Unit
        </div>
      </div>
    </div>
  )
}
