export function addProductToCartRequest(id) {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    id
  }
}

export function addProductToCartSuccess(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
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
