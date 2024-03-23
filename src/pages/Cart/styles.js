import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    border-top: 1px solid #70402b;
    padding-top: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #70402b;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#70402b')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #532c1b;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
  }

  img {
    width: 80px;
    height: 100px;
  }

  strong {
    color: #70402b;
    display: block;
  }

  small {
    color: #888;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const FreeShipping = styled.div`
  display: flex;
  background: #78cea5;
  border-radius: 10px;
  padding: 10px;

  span {
    color: #fff;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #532c1b;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
