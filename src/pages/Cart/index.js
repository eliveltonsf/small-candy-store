/* eslint-disable no-unused-expressions */
import React from 'react';
import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, FreeShipping, ProductTable, Total } from './styles';

export default function Cart() {
  const total = useSelector((state) => {
    const valueTotal = state.cart.reduce((totalSum, product) => {
      return totalSum + (product.sellingPrice / 100) * product.amount;
    }, 0);

    return {
      valorTotal: valueTotal,
      total: formatPrice(valueTotal),
    };
  });

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice((product.sellingPrice / 100) * product.amount),
    })),
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th colSpan="2">PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr>
              <td>
                <img src={product.imageUrl} alt={product.title} />
              </td>
              <td>
                <strong>{product.name}</strong>
                <small>{product.priceFormatted}</small>
                <span>{product.sellingPriceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#70402b" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#70402b" />
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
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <MdDelete size={20} color="#70402b" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        {total.valorTotal >= 10 && (
          <FreeShipping>
            <span>Parabéns, sua compra tem frete grátis !</span>
          </FreeShipping>
        )}

        <Total>
          <span>TOTAL</span>
          <strong>{total.total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
