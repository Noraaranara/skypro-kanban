import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const Title = styled.h1`
  font-size: 96px;
  font-weight: 700;
  color: #94a6be;
  margin: 0;
`;
export const Text = styled.p`
  font-size: 24px;
  color: #94a6be;
  margin: 0;
`;
export const StyledLink = styled(Link)`
  padding: 12px 24px;
  background: #94a6be;
  color: #fff;
  text-decoration: none;
  border: 1px solid #94a6be;
  border-radius: 8px;
  transition: 0.2s;
  &:hover {
    background: #fff;
    color: rgba(148, 166, 190, 0.4);
  }
`;
