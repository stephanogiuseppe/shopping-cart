import React from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md'

import { Container, Products, Total } from './styles'

export default function Cart() {
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
          <tr>
            <td>
              <img src="https://picsum.photos/200/200" alt="random image" />
            </td>
            <td>
              <strong>Random image</strong>
              <span>R$ 219,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 428,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} />
              </button>
            </td>
          </tr>
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
