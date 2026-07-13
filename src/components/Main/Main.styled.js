import styled from 'styled-components';
import { breakpoints } from '../../components/Header/Header.styled';

export const MainEl = styled.main`
  width: 100%;
  flex: 1;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: ${breakpoints.small}) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const Block = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: ${breakpoints.desktop}) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: ${breakpoints.desktop}) {
    display: block;
  }
`;

export const SEmpty = styled.h2`
  width: 100%;
  text-align: center;
  margin-top: 100px;
  color: #94a6be;
  font-size: 24px;
`;
