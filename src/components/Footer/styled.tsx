import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  position: absolute;
  bottom: 0;
  width: 100vw;
  background-color: rgb(242, 149, 89);
  color: #202c39;
`;

export const FooterContent = styled.div`
  display: inline-flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex: 1 50%;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-top: 0.5rem;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  display: block;
  color: #202c39;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export const FooterHeader = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const SocialMediaIconContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  justify-content: end;
  flex: 1 51%;
  padding: 0 4rem 0.5rem 0;
`;

export const SocialMediaIcon = styled.a`
  font-size: 1.5rem;
  margin: 0px 0.6rem 0.3rem 0;
  color: #202c39;
  &:hover {
    color: #fff;
  }
`;

export const AllRightsReserved = styled.p`
  margin: 0 auto 0 2rem;
  font-size: 0.8rem;
  font-weight: bold;
`;
