export function addProductToCart(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    product
  }
}

export function removeProductFromCart(id) {
  return {
    type: 'REMOVE_PRODUCT_FROM_CART',
    id
  }
}
