import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  CopyRight,
  SocialIcons,
  CopyRightContainer,
} from './styled';
import { AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
export const Footer = () => {
  return (
    <Box>
      {/* <h1 style={{ color: 'purple', textAlign: 'center', marginTop: '-50px' }}>
        Bloom: The CFP Portal
      </h1> */}
      <Container>
        <Row>
          <Column>
            <Heading>Features</Heading>
            <FooterLink href="#">Creation</FooterLink>
            <FooterLink href="#">Management</FooterLink>
            <FooterLink href="#">Tracking</FooterLink>
          </Column>
          <Column>
            <Heading>Profile</Heading>
            <FooterLink href="#">Edit</FooterLink>
            <FooterLink href="#">View</FooterLink>
            <FooterLink href="#">Settings</FooterLink>
          </Column>
          <Column>
            <Heading>Support</Heading>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Feedback</FooterLink>
          </Column>
        </Row>
      </Container>
      <CopyRightContainer>
        <CopyRight>© 2023 Bloom, All Rights Reserved.</CopyRight>
        <SocialIcons>
          <AiFillInstagram />
          <AiFillTwitterSquare />
        </SocialIcons>
      </CopyRightContainer>
    </Box>
  );
};
