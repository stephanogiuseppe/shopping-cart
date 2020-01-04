import React from 'react'
import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart } from './styles'
import logo from './../../assets/images/shopping-cart-logo.svg'

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Shopping Cart logo image" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My basket</strong>
          <span>3 items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  )
}
