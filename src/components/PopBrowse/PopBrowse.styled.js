import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SPopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  &:target {
    display: block;
  }
`;

export const SContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const SBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  position: relative;
`;

export const SContent = styled.div`
  display: block;
  text-align: left;
  opacity: 1;
  margin-bottom: 20px;
`;

export const STop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const SInput = styled.input`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  outline: none;
  border: none;
  background: transparent;
`;

export const STitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  outline: none;
  border: none;
`;

export const SStatus = styled.div`
  margin-bottom: 11px;
`;

export const SSParag = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const SSThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SSTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background-color: rgba(148, 166, 190, 1);
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 1;
  cursor: pointer;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const SWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  max-width: 100%;
`;

export const SFBlock = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    font-size: 14px;
  }
`;
export const SFArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const SBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 10px;

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-right: 0px;
  }
`;

export const SBGroup = styled.div`
  display: flex;

  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

export const SBBtn = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 10px;
  letter-spacing: -1%;
  margin-right: 8px;
  height: 30px;
  margin-bottom: 10px;
  padding: 10px 14px;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const SClose = styled(Link)`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 10px;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #33399b;
  }
`;
