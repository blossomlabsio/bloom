import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: #f29559;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  // margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 100px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #000;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: white;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #000;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const CopyRight = styled.p`
  color: #000;
  // text-align: center;
  margin-top: 20px;
  margin-left: 60px;
`;

export const SocialIcons = styled.div`
  display: flex;
  // justify-content: space-between;
  gap: 10px;
  align-items: center;
  width: 240px;
`;

export const CopyRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
