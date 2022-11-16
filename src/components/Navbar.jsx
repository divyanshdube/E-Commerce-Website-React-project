import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Container = styled.div`
  height: 60px;
  background-color: lightgreen;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 2px;
  cursor: pointer;
`;
const Input = styled.input`
  border: none;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{color:"grey", fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>-*-* INSTANT ORDER -*-*</Logo>
        </Center>
        <Right>
          <Menu>Register</Menu>
          <Menu>Sign-In</Menu>
          <Menu>
            <ShoppingCartTwoToneIcon />
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
