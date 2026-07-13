import styled from 'styled-components';

export const SPopUser = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  min-width: 213px;
  height: 205px;
  border-radius: 10px;
  padding: 34px;
  text-align: center;
  z-index: 2;

  &:target {
    display: block;
  }
`;
export const SName = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;
export const SMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;
export const STheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: #000;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }
`;

export const SCheckbox = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  outline: none;
  appearance: none;
  cursor: pointer;

  background: ${({ $theme }) => ($theme === 'light' ? '#EAEEF6' : '#fff')};

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    transition: 0.3s;
    background: ${({ $theme }) => ($theme === 'light' ? '#94A6BE' : '#565EEF')};
  }

  &:checked::before {
    left: 12px;
  }
`;
export const SButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid #565eef;

  a {
    &:hover {
      color: #ffffff;
    }
  }

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;
