import styled from 'styled-components';
import { breakpoints } from '../../components/Header/Header.styled';

export const Item = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: ${breakpoints.mobile}) {
    max-width: 340px;
    width: 100%;
  }
`;
export const Title = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  @media screen and (max-width: ${breakpoints.mobile}) {
    padding: 0;
  }
`;
export const Block = styled.div`
  display: block;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;
export const Month = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Action = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #94a6be;
  }
`;
export const Content = styled.div`
  margin-bottom: 12px;
`;

export const Days = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const Day = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;
export const Cells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
export const Cell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  opacity: ${({ $isOtherMonth }) => ($isOtherMonth ? 0 : 1)};

  font-weight: ${({ $current }) => ($current ? 700 : 400)};

  ${({ $isDay }) =>
    $isDay &&
    `
    &:hover {
      color: #94A6BE;
      background-color: #EAEEF6;
    }
  `}

  ${({ $active }) =>
    $active &&
    `
    background-color: #94A6BE;
    Scolor: #FFFFFF;
  `}

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;
export const Period = styled.div`
  padding: 0 7px;

  @media screen and (max-width: ${breakpoints.mobile}) {
    padding: 0;
  }
`;
export const Paragraph = styled.div`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  span {
    color: #000000;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;
