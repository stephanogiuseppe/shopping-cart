import React from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { Container, Products, Total } from './styles'
import * as CartActions from './../../store/modules/cart/actions'
import { formatPriceToBRMask } from './../../util/format'

export default function Cart() {
  const total = useSelector(state =>
    formatPriceToBRMask(
      state.cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
      )
    )
  )

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPriceToBRMask(product.price * product.amount)
    }))
  )

  const dispatch = useDispatch()

  function increment(product) {
    dispatch(
      CartActions.updateAmountProductFromCartRequest(
        product.id,
        product.amount + 1
      )
    )
  }

  function decrement(product) {
    dispatch(
      CartActions.updateAmountProductFromCartRequest(
        product.id,
        product.amount - 1
      )
    )
  }

  return (
    <Container>
      <Products>
        <thead>
          <tr>
            <th />
            <th>Product</th>
            <th>Quant</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CartActions.removeProductFromCart(product.id))
                  }
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Products>
      <footer>
        <button type="button">Finish</button>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  )
}

Cart.propTypes = {
  cart: PropTypes.func,
  removeProductFromCart: PropTypes.func,
  updateAmountProductFromCartRequest: PropTypes.func,
  total: PropTypes.number
}
