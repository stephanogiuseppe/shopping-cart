import React from 'react'
import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'
import { useSelector } from 'react-redux'

import { Container, Cart } from './styles'
import logo from './../../assets/images/shopping-cart-logo.svg'

export default function Header() {
  const cartSize = useSelector(state => state.cart.length)
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Shopping Cart logo image" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My basket</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  )
}

Header.propTypes = {
  cartSize: Number
}
