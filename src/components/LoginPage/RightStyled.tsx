import styled from 'styled-components';

export const Right = styled.div`
  width: 45vw;
  padding: 10px 70px;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    padding: 10px 40px;
  }
  @media only screen and (min-width: 601px) and (max-width: 768px) {
    padding: 50px 20px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 15px 35px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    padding: 30px 60px;
  }
  @media only screen and (min-width: 1281px) {
    padding: 30px 60px;
  }
`;

export const Figure = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Figcaption = styled.div`
  font-family: Gotham;
  font-size: 30px;
  font-weight: 600;

  @media only screen and (max-width: 600px) {
    color: white;
  }
  @media only screen and (min-width: 601px) and (max-width: 768px) {
    font-size: 28px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 35px;
  }
`;
