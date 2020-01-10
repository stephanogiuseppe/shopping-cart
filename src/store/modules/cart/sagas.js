import { call, select, put, all, takeLatest } from 'redux-saga/effects'

import api from './../../../services/api'
import { formatPriceToBRMask } from './../../../util/format'
import { addProductToCartSuccess, updateAmountProductFromCart } from './actions'

function* addToCart({ id }) {
  const productExists = yield select(state => state.cart.find(p => p.id === id))

  if (productExists) {
    const amount = ++productExists.amount
    yield put(updateAmountProductFromCart(id, amount))
  } else {
    const response = yield call(api.get, `/products/${id}`)

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPriceToBRMask(response.data.price)
    }

    yield put(addProductToCartSuccess(data))
  }
}

export default all([takeLatest('ADD_PRODUCT_TO_CART_REQUEST', addToCart)])
