import styled from 'styled-components';

export const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const Svg = styled.svg`
  width: 20px;
  cursor: pointer;

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 40px;
  }
  @media only screen and (min-width: 1281px) {
    width: 60px;
  }
`;
