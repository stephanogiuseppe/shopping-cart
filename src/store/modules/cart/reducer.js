export default function cart(olderProducts = [], action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const productIndex = olderProducts.findIndex(
        item => item.id === action.product.id
      )

      if (productIndex >= 0) {
        olderProducts[productIndex].amount++
        return [...olderProducts]
      }

      return [
        ...olderProducts,
        {
          ...action.product,
          amount: 1
        }
      ]
    }
    case 'REMOVE_FROM_CART': {
      const productIndex = olderProducts.findIndex(
        item => item.id === action.id
      )

      productIndex >= 0 && olderProducts.splice(productIndex, 1)

      return [...olderProducts]
    }
    default:
      return olderProducts
  }
}
