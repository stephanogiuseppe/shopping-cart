import React from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import { Container, Products, Total } from './styles'
import * as CartActions from './../../store/modules/cart/actions'

function Cart({ cart, removeProductFromCart, updateAmountProductFromCart }) {
  function increment(product) {
    updateAmountProductFromCart(product.id, product.amount + 1)
  }

  function decrement(product) {
    updateAmountProductFromCart(product.id, product.amount - 1)
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
                <strong>R$ 428,00</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeProductFromCart(product.id)}
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
          <strong>R$ 428,00</strong>
        </Total>
      </footer>
    </Container>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

Cart.propTypes = {
  cart: PropTypes.func,
  removeProductFromCart: PropTypes.func,
  updateAmountProductFromCart: PropTypes.func
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
