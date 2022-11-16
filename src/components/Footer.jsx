import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HeadsetIcon from '@mui/icons-material/Headset';
import EmailIcon from '@mui/icons-material/Email';
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Desc = styled.p`
  margin: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItems = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Desc>
          Welcome to the E-Commerce Website. Shop your favourite product to
          avail the best offer available. Also Easy return and free shopping
          available on the products.
        </Desc>

        <SocialContainer>
          <SocialIcon>
            <YouTubeIcon />
          </SocialIcon>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Kids Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Track Order</ListItem>
          <ListItem>Carrer</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>Customer Support</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact Details</Title>
        <ContactItems>
          <HeadsetIcon /> Toll Free No.: 1800 252 4832
        </ContactItems>
        <ContactItems>
        <EmailIcon /> Mail us: contact.ecommerce@rediffmail.com
        </ContactItems>
      </Right>
    </Container>
  );
};

export default Footer;
