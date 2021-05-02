import Content from "./content"
import AddToCart from "./add-to-cart"
import { AiOutlineHeart } from 'react-icons/ai'

export default function () {
  return (
    <div className="mt-2">
      <button className="btn-to-wishlist">
        <span className="heart-icon">
          <AiOutlineHeart />
        </span>
        ADD TO WISHLIST
      </button>
      <style jsx>{`
        .heart-icon{
          font-size: 1.5rem;
          color: gray;
          margin-right: 10px;
        } 

        .btn-to-wishlist {
          border: none;
          background: none;
          color: #2372e6;
          font-size: 0.9rem;
        }
      `}
      </style>
    </div>
  )
}
