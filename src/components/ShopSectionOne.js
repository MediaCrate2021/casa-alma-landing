import * as React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { Parallax } from "react-scroll-parallax"
import styled from "styled-components"

import ImgLinkWrapper from "./ImgLinkWrapper.js"

const Container = styled.div`
  // border: 1px solid green;
  height: 100%;
  width: 31.3vw;

  margin-bottom: 30px;

  @media screen and (max-width: 1024px) {
    width: 72vw;
  }

  @media screen and (max-width: 640px) {
    width: 80vw;
    margin-bottom: 40px;
  }
`

const ShopTitle = styled.h2`
  // border: 1px solid pink;
  letter-spacing: 3.06px;
  margin-bottom: 52px;

  @media screen and (max-width: 640px) {
    letter-spacing: 1.5px;
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
  height: 174px;

  background-image: url(${props => props.imgSource});
  background-repeat: no-repeat;
  background-size: cover;

  background-position: 50% 70%;
`

const RightImgContainer = styled.div`
  width: 100%;
  height: 513px;
  background-image: url(${props => props.imgSource});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
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

  margin: 90px 0 90px 0;

  @media screen and (max-width: 640px) {
    margin: 42px 0 47px 0;
  }
  @media screen and (max-width: 375px) {
    margin-top: 24px;
  }
`

const Section = styled.div`
  width: 15vw;

  @media screen and (max-width: 1024px) {
    // width: 34.1vw;
    width: 48%;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const ShopSectionOne = props => (
  <Container>
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <ShopTitle>casa alma.</ShopTitle>
      <Parallax y={["-40px", "40px"]}>
        <ImgContainer>
          <Section>
            <ImgLinkWrapper>
              <LeftImgContainer imgSource={props.imgOne}></LeftImgContainer>
            </ImgLinkWrapper>
            <a href="https://shopcasaalma.ca/">
              <ShopButton>Shop</ShopButton>
            </a>
          </Section>

          <div style={{ width: `30px` }}></div>

          <Section>
            <ImgLinkWrapper>
              <RightImgContainer imgSource={props.imgTwo}></RightImgContainer>
            </ImgLinkWrapper>
          </Section>
        </ImgContainer>
      </Parallax>
    </ScrollAnimation>
  </Container>
)

export default ShopSectionOne
