import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }

  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const SLoader = styled.div`
  background: linear-gradient(
    90deg,
    #c1cddc -6.32%,
    #e9eef7 46.75%,
    #c1cddc 106.46%
  );
  animation: ${shimmer} 10s infinite;
`;
