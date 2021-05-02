import Content from "./content"
import AddToCart from "./add-to-cart"
import AddToWishList from "./add-to-wishlist"

export default function ProductContent () {
  return (
    <div>
      <Content />
      <AddToCart />
      <AddToWishList />
    </div>
  )
}
