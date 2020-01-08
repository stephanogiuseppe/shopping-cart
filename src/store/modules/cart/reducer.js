export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const index = state.findIndex(item => item.id === action.product.id)

      if (index >= 0) {
        state[index].amount++
        return [...state]
      }

      return [
        ...state,
        {
          ...action.product,
          amount: 1
        }
      ]
    }
    default:
      return state
  }
}
