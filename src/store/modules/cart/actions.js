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

export function updateAmountProductFromCart(id, amount) {
  return {
    type: 'UPDATE_AMOUNT_PRODUCT_FROM_CART',
    id,
    amount
  }
}
