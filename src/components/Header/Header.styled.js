import styled from 'styled-components';

export const breakpoints = {
  mobile: '660px',
  desktop: '1200px',
  small: '495px',
  tiny: '375px',
};

export const HeaderEl = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
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
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;
export const Logo = styled.div`
  img {
    width: 85px;
  }
`;
export const Nav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Btn = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  &:hover {
    background-color: #33399b;
  }

  a {
    color: #ffffff;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`;

export const SUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;

  &:hover {
    color: #33399b;
  }

  svg {
    display: block;
    width: 7px;
    height: 4px;
    margin: 3px 0 0 5px;
    padding: 0;
  }

  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;
