import React from "react"

import styled from "styled-components"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import ImgOne from "../images/stay-section/OutdoorCabin_002-min.jpg"
import ImgTwo from "../images/stay-section/Cabin_EXT-min.jpg"
import ImgThree from "../images/stay-section/Door_INT-min.jpg"
import ImgFour from "../images/stay-section/Staircase-min.jpg"

const DesktopCarouselContainer = styled.div`
  // border: 1px solid red;
  width: 100%;
  height: 100%;

  display: block;

  overflow: hidden;

  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

const MobileTabletCarouselContainer = styled.div`
  // border: 1px solid red;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  display: none;
  .carousel-slider {
    height: 43vh;
    @media screen and (max-width: 375px) {
      height: 40vh;
    }
  }

  @media screen and (max-width: 1024px) {
    display: block;
    width: 100vw;
    height: 43vh;
  }
  @media screen and (max-width: 375px) {
    height: 40vh;
  }
`

const StaySectionCarousel = () => (
  <div>
    <DesktopCarouselContainer>
      <Carousel
        infiniteLoop
        autoPlay
        interval={5000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        transitionTime={1500}
      >
        <div
          style={{
            width: `100%`,
            height: `100vh`,
            backgroundImage: `url(${ImgOne})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <img style={{ opacity: `0` }} src={ImgOne}></img>
        </div>
        <div
          style={{
            width: `100%`,
            height: `100vh`,
            backgroundImage: `url(${ImgTwo})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `50% 100%`,
          }}
        >
          <img style={{ opacity: `0` }} src={ImgTwo}></img>
        </div>
        <div
          style={{
            width: `100%`,
            height: `100vh`,
            backgroundImage: `url(${ImgThree})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `50% 60%`,
          }}
        >
          <img style={{ opacity: `0` }} src={ImgThree}></img>
        </div>
        <div
          style={{
            width: `100%`,
            height: `100vh`,
            backgroundImage: `url(${ImgFour})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `50% 50%`,
          }}
        >
          <img style={{ opacity: `0` }} src={ImgFour}></img>
        </div>
      </Carousel>
    </DesktopCarouselContainer>

    <MobileTabletCarouselContainer>
      <Carousel
        infiniteLoop
        autoPlay
        interval={5000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        transitionTime={1500}
      >
        <div
          style={{
            width: `100%`,
            height: `50vh`,
            backgroundImage: `url(${ImgOne})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `50% 10%`,
          }}
        >
          <img style={{ opacity: `0` }} src={ImgOne}></img>
        </div>
        <div
          style={{
            width: `100%`,
            height: `50vh`,
            backgroundImage: `url(${ImgTwo})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `50% 100%`,
          }}
        >
          <img style={{ opacity: `0` }} src={ImgTwo}></img>
        </div>
        <div
          style={{
            width: `100%`,
            height: `50vh`,
            backgroundImage: `url(${ImgThree})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `50% 70%`,
          }}
        >
          <img style={{ opacity: `0` }} src={ImgThree}></img>
        </div>
        <div
          style={{
            width: `100%`,
            height: `50vh`,
            backgroundImage: `url(${ImgFour})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `50% 50%`,
          }}
        >
          <img style={{ opacity: `0` }} src={ImgFour}></img>
        </div>
      </Carousel>
    </MobileTabletCarouselContainer>
  </div>
)

export default StaySectionCarousel
