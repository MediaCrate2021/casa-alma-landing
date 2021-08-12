import * as React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { Parallax } from "react-scroll-parallax"
import styled from "styled-components"
import ImgLinkWrapper from "./ImgLinkWrapper"

const Container = styled.div`
  // border: 1px solid pink;

  height: 100%;
  width: 30vw;

  margin-bottom: 60px;
  margin-left: -17vh;

  @media screen and (max-width: 1024px) {
    width: 56.4vw;
    margin-left: -7vh;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-bottom: 49px;
    margin-left: -4.5vh;
  }
`

const ImgContainer = styled.div`
  // border: 1px solid green;

  width: 100%;
  height: 468px;
  background-image: url(${props => props.imgSource});
  background-repeat: no-repeat;
  background-size: cover;

  background-position: 50% 55%;
`

const ShopSectionThree = props => (
  <Container>
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <Parallax y={["-40px", "40px"]}>
        <ImgLinkWrapper>
          <ImgContainer imgSource={props.imgFour}></ImgContainer>
        </ImgLinkWrapper>
      </Parallax>
    </ScrollAnimation>
  </Container>
)

export default ShopSectionThree
