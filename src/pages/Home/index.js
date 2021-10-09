/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import allProducts from '../../repositories/products.json';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {}),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const all = allProducts;

      const formatAllProducts = all.items.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price / 100),
        sellingPriceFormatted: formatPrice(product.sellingPrice / 100),
      }));

      setProducts(formatAllProducts);
    }

    loadProducts();
  }, []);

  function handleAddProduct(product) {
    dispatch(CartActions.addToCart(product));
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.imageUrl} alt={product.title} />
          <strong>{product.name}</strong>
          <small>{product.priceFormatted}</small>
          <span>{product.sellingPriceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} font="#fff" />
              {amount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
