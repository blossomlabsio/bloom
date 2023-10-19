import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
export const FooterDiv = styled.div`
  background: #000;
  position: absolute;
  bottom: 0;
  padding: 0% 20%;
  width: 100vw;
  height: 22vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    gap: 2px;
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    padding: 0% 15%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 0% 20%;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
  }
  @media only screen and (min-width: 1281px) {
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  width: 25%;
  color: #fff;

  @media only screen and (max-width: 600px) {
    padding-top: 15px;
    width: 80%;
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    width: 40%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 35%;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    width: 30%;
  }
  @media only screen and (min-width: 1281px) {
  }
`;

export const TitleFigure = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const TitleImg = styled.img`
  width: 36px;
`;

export const TitleFigcaption = styled.div`
  font-size: 18px;
  margin-left: 5px;
`;

export const TitleP = styled.p`
  font-size: 8px;
  color: #c4c4c4;
  font-family: Helvetica;
  font-weight: 700;
  margin-bottom: 5px;

  @media only screen and (max-width: 600px) {
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
  }
  @media only screen and (min-width: 1281px) {
  }
`;

export const Socials = styled.div`
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
