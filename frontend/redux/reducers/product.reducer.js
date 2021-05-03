
const initialState = {
  product: {},
  productRelated: []
}

const productReducer = (state = initialState, action) => {

  switch(action.type) {
    case "LOAD_PRODUCT_ONE":
      return { ...state, product: action.payload }
    case "LOAD_PRODUCT_RELATED":
      return { ...state, productRelated: action.payload }
    default:
      return { ...state }

  }

}


export default productReducer
