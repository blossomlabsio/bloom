import styled from 'styled-components';

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
