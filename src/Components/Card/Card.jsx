import React from 'react'
import {Container, H3, Para, Wrapper} from './Card.style';

const Card = (props) => {
  return (
    <Container>
      <Wrapper>
       <span>{props.img}</span> 

      <H3>{props.title}</H3>
      
       <Para>{props.para}</Para>
      </Wrapper>
    </Container>
  )
}

export default Card