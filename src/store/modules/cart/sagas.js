import { call, select, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from './../../../services/api'
import history from './../../../services/history'
import { formatPriceToBRMask } from './../../../util/format'
import {
  addProductToCartSuccess,
  updateAmountProductFromCartSuccess
} from './actions'

function* addToCart({ id }) {
  const productExists = yield select(state => state.cart.find(p => p.id === id))

  const stock = yield call(api.get, `/stock/${id}`)
  const stockAmount = stock.data.amount
  const currentAmount = productExists ? productExists.amount : 0

  if (currentAmount + 1 > stockAmount) {
    toast.error('Insufficient amount')
    return
  }

  if (productExists) {
    yield put(updateAmountProductFromCartSuccess(id, ++productExists.amount))
    history.push('/cart')
    return
  }

  const response = yield call(api.get, `/products/${id}`)

  const data = {
    ...response.data,
    amount: 1,
    priceFormatted: formatPriceToBRMask(response.data.price)
  }

  yield put(addProductToCartSuccess(data))
  history.push('/cart')
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) {
    return
  }

  const stock = yield call(api.get, `/stock/${id}`)
  const stockAmount = stock.data.amount

  if (amount > stockAmount) {
    toast.error('Insufficient amount')
    return
  }

  yield put(updateAmountProductFromCartSuccess(id, amount))
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', addToCart),
  takeLatest('UPDATE_AMOUNT_PRODUCT_FROM_CART_REQUEST', updateAmount)
])
