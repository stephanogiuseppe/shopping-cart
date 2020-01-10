import React, { Component } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import api from './../../services/api'
import { formatPriceToBRMask } from './../../util/format'
import { Products } from './styles'
import * as CartActions from './../../store/modules/cart/actions'

class Home extends Component {
  state = {
    products: []
  }

  async componentDidMount() {
    const response = await api.get('products')
    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPriceToBRMask(product.price)
    }))
    this.setState({ products: data })
  }

  handleAddProduct(product) {
    const { addProductToCart } = this.props
    addProductToCart(product)
  }

  render() {
    const { products } = this.state
    const { amount } = this.props

    return (
      <Products>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormated}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} /> {amount[product.id] || 0}
              </div>
              <span>Add to cart</span>
            </button>
          </li>
        ))}
      </Products>
    )
  }
}

Home.propTypes = {
  addProductToCart: PropTypes.func,
  amount: PropTypes.number
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount
    return amount
  }, {})
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
