import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 2px;
  height: 80vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: whitesmoke;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: whitesmoke;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

export const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};
