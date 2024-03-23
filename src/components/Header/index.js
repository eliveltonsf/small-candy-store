import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';
import { Cart, Container } from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Small Candy Store" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#532c1b" />
      </Cart>
    </Container>
  );
}
