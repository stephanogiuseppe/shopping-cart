export default function cart(olderProducts = [], action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART_SUCCESS':
      return [...olderProducts, action.product]
    case 'REMOVE_PRODUCT_FROM_CART': {
      const productIndex = olderProducts.findIndex(
        item => item.id === action.id
      )

      productIndex >= 0 && olderProducts.splice(productIndex, 1)

      return [...olderProducts]
    }
    case 'UPDATE_AMOUNT_PRODUCT_FROM_CART_SUCCESS': {
      const productIndex = olderProducts.findIndex(
        item => item.id === action.id
      )

      if (productIndex >= 0) {
        olderProducts[productIndex].amount = Number(action.amount)
      }

      return [...olderProducts]
    }
    default:
      return olderProducts
  }
}
