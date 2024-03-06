import styled from 'styled-components';

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
