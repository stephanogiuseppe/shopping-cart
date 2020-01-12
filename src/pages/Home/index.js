import React, { useState, useEffect } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import api from './../../services/api'
import { formatPriceToBRMask } from './../../util/format'
import { Products } from './styles'
import * as CartActions from './../../store/modules/cart/actions'

export default function Home() {
  const [products, setProducts] = useState([])

  const amount = useSelector(state =>
    state.cart.reduce((totalAmount, product) => {
      totalAmount[product.id] = product.amount
      return totalAmount
    }, {})
  )

  const dispatch = useDispatch()

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products')
      const data = response.data.map(product => ({
        ...product,
        priceFormated: formatPriceToBRMask(product.price)
      }))

      setProducts(data)
    }

    loadProducts()
  }, [])

  const handleAddProduct = id => {
    dispatch(CartActions.addProductToCartRequest(id))
  }

  return (
    <Products>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
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

Home.propTypes = {
  addProductToCartRequest: PropTypes.func,
  amount: PropTypes.number
}
