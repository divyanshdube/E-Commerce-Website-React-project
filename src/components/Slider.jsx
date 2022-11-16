import React, {useState} from 'react'
import styled from "styled-components";
import {sliderItems} from "../data";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: grey;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 1;
`

const Wrapper = styled.div`
height: 90%;
display: flex;
transform: translateX(${props=>props.slideIndex * -100}vw);
transition: all 1.5s ease-in;
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: ${props => props.bg};
`
const ImageContainer = styled.div`
height: 100%;
flex:1;
`
const Image = styled.img`
height: 80%;
padding: 10px;
`

const InfoContainer = styled.div`
flex:1;
padding: 50px;
`

const Title =  styled.h1`
font-size: 60px
`

const Desc =  styled.p`
margin: 30px 0px;
font-size: 18px;
font-weight: 500;
letter-spacing: 2px;
margin-right: 5px;
`
const Button =  styled.button`
padding: 8px;
font-size: 16px;
background-color: transparent:
cursor: pointer;
`

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) =>{

    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }
    else{
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src= {item.img}/>
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

        <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
        </Arrow>
    </Container>
  )
}

export default Slider;
