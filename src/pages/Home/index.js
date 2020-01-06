import React, { Component } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import api from './../../services/api'
import { formatPriceToBRMask } from './../../util/format'
import { Products } from './styles'

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
    const { dispatch } = this.props

    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      product
    })
  }

  render() {
    const { products } = this.state

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
                <MdAddShoppingCart size={16} /> 3
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
  dispatch: PropTypes.func
}

export default connect()(Home)
