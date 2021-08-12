import * as React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import styled from "styled-components"
import { Parallax } from "react-scroll-parallax"
import ImgLinkWrapper from "./ImgLinkWrapper"

const Container = styled.div`
  // border: 1px solid green;
  height: 100%;
  width: 43.4vw;

  @media screen and (max-width: 1024px) {
    width: 90.3vw;
  }

  @media screen and (max-width: 640px) {
    width: 80vw;
  }
`

const ShopTitle = styled.h2`
  // border: 1px solid pink;
  letter-spacing: 3.06px;
  margin-top: 87px;

  @media screen and (max-width: 640px) {
    display: none;
  }
`

const MobileShopTitle = styled.h2`
  // border: 1px solid pink;
  display: none;

  @media screen and (max-width: 640px) {
    display: block;
    letter-spacing: 1.5px;
    margin-bottom: 34px;
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
  height: 282px;

  background-image: url(${props => props.imgSource});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 80%;

  @media screen and (max-width: 640px) {
    height: 245px;
  }
`

const RightImgContainer = styled.div`
  width: 100%;
  height: 656px;
  background-image: url(${props => props.imgSource});
  background-repeat: no-repeat;
  background-size: cover;

  background-position: 60% 50%;
`

const BottomImgContainer = styled.div`
  width: 100%;
  height: 447px;
  background-image: url(${props => props.imgSource});
  background-repeat: no-repeat;
  background-size: cover;

  background-position: 50% 80%;

  @media screen and (max-width: 640px) {
    height: 332px;
  }
`

const ShopButton = styled.button`
  width: 157px;
  height: 41px;
  color: #454545;
  border: 1px solid #454545;
  border-radius: 34px;
  background: transparent;

  font-family: "Roboto Mono", monospace;
  font-size: 16px;
  letter-spacing: 1.6px;

  cursor: pointer;

  &:hover {
    background-color: #454545;
    color: #fffef6;
    transition: all 0.4s;
  }

  margin: 313px 0 41px 0;

  @media screen and (max-width: 640px) {
    margin: 41px 0 36px 0;
  }
`

const LeftSection = styled.div`
  // border: 1px solid green;
  width: 24.4vw;

  @media screen and (max-width: 1024px) {
    width: 52.9vw;
  }

  @media screen and (max-width: 640px) {
    width: 95vw;
  }
`

const RightSection = styled.div`
  width: 20vw;

  @media screen and (max-width: 1024px) {
    width: 33.6vw;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`

const BottomSection = styled.div`
  width: 31.15vw;

  @media screen and (max-width: 1024px) {
    width: 71.8vw;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const ShopSectionSix = props => (
  <Container>
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <Parallax y={["-40px", "40px"]}>
        <ImgContainer>
          <MobileShopTitle>casa alma.</MobileShopTitle>
          <LeftSection>
            <ImgLinkWrapper>
              <LeftImgContainer imgSource={props.imgEight}></LeftImgContainer>
            </ImgLinkWrapper>
            <ShopTitle>casa alma.</ShopTitle>
            <a href="https://shopcasaalma.ca/">
              <ShopButton>Shop</ShopButton>
            </a>
          </LeftSection>

          <div style={{ width: `30px` }}></div>

          <RightSection>
            <ImgLinkWrapper>
              <RightImgContainer imgSource={props.imgNine}></RightImgContainer>
            </ImgLinkWrapper>
          </RightSection>
        </ImgContainer>
      </Parallax>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <BottomSection>
        <ImgLinkWrapper>
          <BottomImgContainer imgSource={props.imgTen}></BottomImgContainer>
        </ImgLinkWrapper>
      </BottomSection>
    </ScrollAnimation>
  </Container>
)

export default ShopSectionSix
