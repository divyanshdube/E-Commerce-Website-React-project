import React from 'react'
import styled from "styled-components";

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
font-size: 18px;
font-weight:500;
align-items:center;
justify-content:center;
` 

export const Announcement = () => {
  return (
    <Container>
        Great Indian Festival ! Free Shipping on order over Rs. 1500
        </Container>
  )
}
