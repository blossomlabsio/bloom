import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const MainBody = styled.div`
  display: flex;
  height: 75vh;
`;

export const Left = styled.div`
  width: 55vw;
  background: url(${process.env.PUBLIC_URL + '/assets/bloomBGI.svg'}) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const H1 = styled.h1`
  color: #fff;
  font-family: 'Helvetica';
  font-size: 150px;
  font-weight: 700;
  text-align: center;
  font-style: normal;
  line-height: normal;
  letter-spacing: -10px;

  @media only screen and (max-width: 600px) {
    font-size: 80px;
    letter-spacing: -5px;
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    font-size: 80px;

    letter-spacing: -5px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 100px;
    letter-spacing: -7px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 130px;
    letter-spacing: -7px;
  }
  @media only screen and (min-width: 1281px) {
    font-size: 160px;
    letter-spacing: -7px;
  }
`;
export const Button = styled.button`
  width: 100px;
  padding: 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
