

const initialState = {
  cartOpen: false
}

const cartReducer = (state = initialState, action) => {

  switch(action.type) {
    case "CART_TOGGLE":
      return { ...state, cartOpen: !state.cartOpen }
    default:
      return { ...state }

  }

}


export default cartReducer
