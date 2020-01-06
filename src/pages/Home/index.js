import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import { Products } from './styles'

export default function Home() {
  return (
    <Products>
      <li>
        <img src="https://picsum.photos/200/200" alt="random image" />
        <strong>Random image</strong>
        <span>R$ 219,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src="https://picsum.photos/200/200" alt="random image" />
        <strong>Random image</strong>
        <span>R$ 219,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img src="https://picsum.photos/200/200" alt="random image" />
        <strong>Random image</strong>
        <span>R$ 219,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img src="https://picsum.photos/200/200" alt="random image" />
        <strong>Random image</strong>
        <span>R$ 219,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img src="https://picsum.photos/200/200" alt="random image" />
        <strong>Random image</strong>
        <span>R$ 219,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img src="https://picsum.photos/200/200" alt="random image" />
        <strong>Random image</strong>
        <span>R$ 219,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
    </Products>
  )
}
