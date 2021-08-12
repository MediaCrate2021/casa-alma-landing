import * as React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { Parallax } from "react-scroll-parallax"
import styled from "styled-components"
import ImgLinkWrapper from "./ImgLinkWrapper"

const Container = styled.div`
  // border: 1px solid green;
  height: 100%;
  width: 45vw;

  margin-bottom: 85px;

  margin-left: -1.2vw;

  @media screen and (max-width: 1024px) {
    width: 100%;

    margin-left: -3.5vw;
  }

  @media screen and (max-width: 640px) {
    width: 80vw;
    margin-bottom: 69px;
    margin-left: 0;
  }
`

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`

const LeftImgContainer = styled.div`
  width: 100%;
  height: 457px;

  // responsiveness with this img btwn 1024 and 1919 is weird, adjust if needed
  // current changes are in LeftSection to mitigate this
  background-image: url(${props => props.imgSource});
  background-repeat: no-repeat;

  background-size: cover;
  background-position: 60% 50%;
`

const RightImgContainer = styled.div`
  width: 100%;
  height: 574px;
  background-image: url(${props => props.imgSource});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40% 70%;

  @media screen and (max-width: 640px) {
    height: 470px;
  }
`

const LeftSection = styled.div`
  // width: 12.25vw;
  width: 233px;

  // @media screen and (max-width: 1024px) {
  //   width: 28vw;
  // }

  @media screen and (max-width: 640px) {
    width: 60vw;
  }
`

const RightSection = styled.div`
  width: 31.3vw;

  @media screen and (max-width: 1024px) {
    width: 62vw;
  }

  @media screen and (max-width: 640px) {
    width: 120%;
    width: 100vw;
  }
`

const SectionDivider = styled.div`
  width: 30px;

  @media screen and (max-width: 640px) {
    height: 56px;
  }
`

const ShopSectionFive = props => (
  <Container>
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <Parallax y={["-20px", "20px"]}>
        <ImgContainer>
          <LeftSection>
            <ImgLinkWrapper>
              <LeftImgContainer imgSource={props.imgSix}></LeftImgContainer>
            </ImgLinkWrapper>
          </LeftSection>

          <SectionDivider></SectionDivider>

          <RightSection>
            <ImgLinkWrapper>
              <RightImgContainer imgSource={props.imgSeven}></RightImgContainer>
            </ImgLinkWrapper>
          </RightSection>
        </ImgContainer>
      </Parallax>
    </ScrollAnimation>
  </Container>
)

export default ShopSectionFive
