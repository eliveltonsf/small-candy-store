import { Link } from 'react-router-dom';
import Styled from 'styled-components';

export const Container = Styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  img {
    height: 100px;
  }
`;

export const Cart = Styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
    color: #999

    strong {
      display: block;
      color: #532c1b;
    }

    span {
      font-size: 12px;
      color: #FFF;
      background: #532c1b;
      padding: 2px 6px;
      border-radius: 10px;
    }
  }
`;
