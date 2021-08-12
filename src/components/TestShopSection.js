import * as React from "react"
import styled from "styled-components"

import Img from "../images/shop-section/section-2.jpg"

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
  border: 1px solid green;

  width: 100%;
  height: 598px;
  background-image: url(${props => props.imageSource});
  background-repeat: no-repeat;
  background-size: cover;
`

const TestShopSection = props => (
  <Container>
    {console.log(props.imgSource)}
    <ImgContainer
      imageSource={props.imgSource}
      // style={{ backgroundImage: `url(${props.imgSource})` }}
    ></ImgContainer>
  </Container>
)

export default TestShopSection
