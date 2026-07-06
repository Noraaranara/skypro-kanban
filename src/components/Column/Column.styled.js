import styled from 'styled-components';
import { breakpoints } from '../../components/Header/Header.styled';

export const Columns = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: ${breakpoints.desktop}) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;
export const Title = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;
export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: ${breakpoints.desktop}) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;

export const SEmpty = styled.h2`
  font-size: 20px;
  color: #94a6be;
`;
