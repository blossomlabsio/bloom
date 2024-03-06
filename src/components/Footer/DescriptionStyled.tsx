import styled from 'styled-components';

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
