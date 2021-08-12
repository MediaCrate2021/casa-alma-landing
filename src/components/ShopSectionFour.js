import * as React from "react"
import styled from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"
import { Parallax } from "react-scroll-parallax"
import ImgLinkWrapper from "./ImgLinkWrapper"

const Container = styled.div`
  // border: 1px solid pink;

  height: 100%;
  width: 26.4vw;

  margin-bottom: 60px;

  margin-left: 5vw;

  @media screen and (max-width: 1024px) {
    width: 60.7vw;
    margin-left: 11vw;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-left: 0;
  }
`

const ImgContainer = styled.div`
  // border: 1px solid green;

  width: 100%;
  height: 786px;
  background-image: url(${props => props.imgSource});
  background-repeat: no-repeat;
  background-size: cover;

  background-position: 55% 80%;
`

const ShopSectionFour = props => (
  <Container>
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <Parallax y={["-10px", "10px"]}>
        <ImgLinkWrapper>
          <ImgContainer imgSource={props.imgFive}></ImgContainer>
        </ImgLinkWrapper>
      </Parallax>
    </ScrollAnimation>
  </Container>
)

export default ShopSectionFour
