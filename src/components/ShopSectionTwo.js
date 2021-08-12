import * as React from "react"
import styled from "styled-components"

import ScrollAnimation from "react-animate-on-scroll"
import { Parallax } from "react-scroll-parallax"
import ImgLinkWrapper from "./ImgLinkWrapper"

const Container = styled.div`
  // border: 1px solid pink;

  height: 100%;
  width: 31.3vw;

  margin-bottom: 60px;

  @media screen and (max-width: 1024px) {
    width: 72vw;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-bottom: 36px;
  }
`

const ImgContainer = styled.div`
  // border: 1px solid green;

  width: 100%;
  height: 598px;
  background-image: url(${props => props.imgSource});
  background-repeat: no-repeat;
  background-size: cover;

  background-position: 50% 80%;
`

const ShopSectionTwo = props => (
  <Container>
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <ImgLinkWrapper>
        <ImgContainer imgSource={props.imgThree}></ImgContainer>
      </ImgLinkWrapper>
    </ScrollAnimation>
  </Container>
)

export default ShopSectionTwo
