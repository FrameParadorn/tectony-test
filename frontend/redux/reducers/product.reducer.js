
const initialState = {
  product: {}
}

const productReducer = (state = initialState, action) => {

  switch(action.type) {
    case "LOAD_PRODUCT_ONE":
      return { ...state, product: action.payload }
    default:
      return { ...state }

  }

}


export default productReducer
