export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      // console.tron([...state, action.product])
      return [...state, action.product]
    default:
      return state
  }
}
