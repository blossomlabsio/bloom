import styled, { createGlobalStyle } from 'styled-components';
import leftImage from '/home/vishesh/Desktop/Work/bloom/src/assets/left.png';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const MainBody = styled.div`
  display: flex;
  height: 80vh;
`;

export const Left = styled.div`
  width: 55vw;
  height: 80vh;
  background: url(${leftImage}) no-repeat;
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

export const Right = styled.div`
  width: 45vw;
  height: 80vh;
  padding: 10px 70px;

  @media only screen and (max-width: 600px) {
    background: url(${leftImage}) no-repeat;
    background-size: cover;
    width: 100vw;
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

export const Image = styled.img`
  max-width: 100%;
  max-height: 200px;
  @media only screen and (min-width: 601px) and (max-width: 768px) {
    width: 40px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 40px;
  }
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

export const DirectLogin = styled.p`
  margin-top: 25px;
  color: #c4c4c4;
  font-family: Helvetica;

  @media only screen and (min-width: 601px) and (max-width: 768px) {

      margin-top: 10px;
      font-size: 13px;
  
  
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
      margin-top: 15px;
      font-size: 15px;
  }}
`;

export const LoginBtns = styled.div`
  margin: 15px 0;
  display: flex;
  gap: 2%;

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    margin: 7px 0px;
    gap: 2%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin: 10px 0px;
  }
`;

export const GoogleButton = styled.button`
  background-color: #f1f1f1;
  width: 50%;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  color: #c4c4c4;
  font-family: Helvetica;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  text-decoration: none;
  border: none;

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    height: 40px;
    padding: 10px;
    font-size: 13px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 15px;
    font-size: 15px;
  }
`;

export const FacebookButton = styled.button`
  background-color: #f1f1f1;
  width: 50%;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  color: #c4c4c4;
  font-family: Helvetica;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  text-decoration: none;
  border: none;

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    height: 40px;
    padding: 10px;
    font-size: 13px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 15px;
    font-size: 15px;
  }
`;

export const GoogleSvg = styled.svg`
  width: 20px;

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    width: 14px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 14px;
  }
`;
export const FacebookSvg = styled.svg`
  width: 20px;
  @media only screen and (min-width: 601px) and (max-width: 768px) {
    width: 10px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 10px;
  }
`;

export const TabBtn = styled.div`
  margin: 15px 0 10px 0;
  display: flex;
  gap: 2%;

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    margin: 10px 0px 5px 0px;
    display: flex;
    gap: 2%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin: 10px 0px 5px 0px;
    display: flex;
    gap: 2%;
  }
`;

export const LoginButton = styled.button`
  width: max-content;
  padding: 5px 20px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 700;
  background-color: #f1f1f1;
  color: #000;
  text-decoration: none;
  border: none;

  &.active {
    background-color: #fff;
    color: #c4c4c4;
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    padding: 5px 20px;
    height: 38px;

    font-size: 14px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 10px 20px;
    height: 40px;
    font-size: 16px;
  }
`;

export const SignupButton = styled.button`
  color: #c4c4c4;
  width: max-content;
  padding: 5px 20px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  font-family: Helvetica;
  font-size: 18px;
  background-color: #fff;

  font-weight: 700;
  text-decoration: none;
  border: none;

  &.active {
    background-color: #f1f1f1;
    color: #000;
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    padding: 5px 20px;
    height: 38px;
    font-size: 14px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 10px 20px;
    height: 40px;
    font-size: 16px;
  }
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  background: #f1f1f1;
  padding-left: 25px;
  font-size: 15px;
  margin-bottom: 5px;
  border-radius: 5px;
  font-family: Helvetica;

  &::placeholder {
    color: #c4c4c4;
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    padding-left: 20px;
    font-size: 12px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding-left: 20px;
    font-size: 14px;
  }
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  background: #f1f1f1;
  padding-left: 25px;
  font-size: 15px;
  margin-bottom: 5px;
  border-radius: 5px;
  border-radius: 5px 5px 0px 0px;
  margin-bottom: 0;
  &::placeholder {
    color: #c4c4c4;
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    padding-left: 20px;
    font-size: 12px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding-left: 20px;
    font-size: 14px;
  }
`;

export const LoginBtn = styled.button`
  color: #fff;
  border-radius: 0px 0px 5px 5px;
  font-family: Helvetica;
  font-weight: 700;
  background: #000;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Forgot = styled.p`
  color: #000;
  font-family: Helvetica;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  margin: 15px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    color: #fff;
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
