import React from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Container, Products, Total } from './styles'

function Cart({ cart, dispatch }) {
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
                  <button type="button">
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
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
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_CART', id: product.id })
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
  dispatch: PropTypes.func
}

export default connect(mapStateToProps)(Cart)
