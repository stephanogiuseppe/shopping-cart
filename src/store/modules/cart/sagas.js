import { call, put, all, takeLatest } from 'redux-saga/effects'

import api from './../../../services/api'
import { addProductToCartSuccess } from './actions'

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`)

  yield put(addProductToCartSuccess(response.data))
}

export default all([takeLatest('ADD_PRODUCT_TO_CART_REQUEST', addToCart)])
