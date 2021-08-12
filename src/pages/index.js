import React, { Component } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"

import StayImg from "../images/stay-section/OutdoorCabin_002.jpg"

import StaySectionCarousel from "../components/StaySectionCarousel.js"

import ShopSectionOne from "../components/ShopSectionOne.js"
import ShopSectionTwo from "../components/ShopSectionTwo.js"
import ShopSectionThree from "../components/ShopSectionThree.js"
import ShopSectionFour from "../components/ShopSectionFour.js"
import ShopSectionFive from "../components/ShopSectionFive.js"
import ShopSectionSix from "../components/ShopSectionSix.js"

import CabinLogo from "../images/Cabin_Logo_WHT_cropped.png"

import ImgOne from "../images/shop-section/Atrium_Setup-min.jpg"
import ImgTwo from "../images/shop-section/Calabria-oval-coffee-table-Calabria-Fantasy-chair-Calabria-accent-table-Calabria-dining-chair-Calabria-round-coffee-table-1536x1024.jpg"
import ImgThree from "../images/shop-section/Casa-Alma-Cabin-95.jpg"
import ImgFour from "../images/shop-section/Casa-Alma-Rugs-2020-7-min.jpg"
import ImgFive from "../images/shop-section/Shop_Cabin_Chair-min.jpg"
import ImgSix from "../images/shop-section/IMG_0120_2-min.jpg"
import ImgSeven from "../images/shop-section/IMG_0658.jpg"
import ImgEight from "../images/shop-section/IMG_5306-min.jpg"
import ImgNine from "../images/shop-section/PP-24_1-min.jpg"
import ImgTen from "../images/shop-section/Vinyl_WHT_MED2-min.jpg"
import ScrollAnimation from "react-animate-on-scroll"

const MainContainer = styled.div`
  display: flex;

  overflow: hidden;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

const ShopContainer = styled.div`
  // border: 1px solid pink;
  width: 50vw;
  height: 100%;

  background: linear-gradient(180deg, #fffef6 50%, #dacdb6 50%);

  color: #454545;

  @media screen and (max-width: 1024px) {
    border-color: green;
    width: 100vw;
    margin-top: 43vh;
  }
`

const ShopContentContainer = styled.div`
  // border: 1px solid red;
  margin: 15vh;
  margin-left: 17vh;
  width: 100%;

  margin-bottom: 0;

  @media screen and (max-width: 1024px) {
    margin: 7vh;

    margin-bottom: 0;
  }

  @media screen and (max-width: 640px) {
    margin: 4.5vh;
    margin-bottom: 0;
  }
`

const VerticalShopLink = styled.a`
  // border: 1px solid pink;

  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.show {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  display: inline-block;

  position: fixed;
  top: 43vh;
  left: 0;
  transform: rotate(270deg);
  z-index: 1;

  font-family: "Roboto Mono", monospace;
  font-size: 15px;
  font-weight: 100;
  letter-spacing: 1px;

  text-transform: uppercase;
  color: #555555;
  text-decoration: none;

  &::after {
    content: "";
    opacity: 0;
    width: 100%;
    height: 1px;
    display: block;
    background: #555555;
    transition: 300ms ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }

  left: 1vw;

  @media screen and (max-width: 1024px) {
    top: 75vh;
    left: -3vw;
  }

  @media screen and (max-width: 640px) {
    left: -14vw;
  }
`

const StayContainer = styled.div`
  // border: 1px solid blue;
  width: 50vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  background-color: black;

  // background-image: url(${StayImg});
  // background-repeat: no-repeat;
  // background-size: cover;

  display: flex;
  justify-content: center;

  color: #ffffff;

  @media screen and (max-width: 1024px) {
    border-color: orange;
    order: -1;
    width: 100vw;
    height: 43vh;

    background-position: 50% 30%;
  }
`

const StayTextContainer = styled.div`
  // border: 1px solid pink;
  margin: 15vh;
  width: 100%;

  @media screen and (max-width: 1024px) {
    margin: 7vh;
  }

  @media screen and (max-width: 640px) {
    margin: 4.5vh;
  }
`

const StayButton = styled.button`
  width: 155px;
  height: 37px;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 34px;
  background: transparent;

  font-family: "Roboto Mono", monospace;
  font-size: 16px;
  letter-spacing: 1.6px;

  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #000000;
    transition: all 0.4s;
  }
`

const CabinTitle = styled.h2`
  // border: 1px solid blue;
  margin-bottom: 15vh;
  letter-spacing: 3.57px;

  display: none;

  @media screen and (max-width: 1024px) {
    margin-bottom: 7vh;
  }

  @media screen and (max-width: 640px) {
    letter-spacing: 1.75px;
    margin-bottom: 9vh;
  }
`

const LogoContainer = styled.div`
// border: 1px solid blue;
margin-bottom: 15vh;

width: 136px;
// height: 61px;
height: 56px;
margin-top: -5px;

background-image: url(${CabinLogo});
background-repeat: no-repeat;
background-size: contain;
background-position: 50% 50%;

@media screen and (max-width: 1024px) {
  margin-bottom: 7vh;
}

@media screen and (max-width: 640px) {
  width: 67px;
  height: 30px;
  margin-bottom: 9vh;
}
`

const CabinSecondaryTitle = styled.h3`
  // border: 1px solid pink;
  letter-spacing: 5px;
  margin-bottom: 4vh;

  @media screen and (max-width: 1024px) {
    margin-bottom: 3vh;
  }

  @media screen and (max-width: 640px) {
    letter-spacing: 2.8px;
    margin-bottom: 5vh;
  }
`

const imageArray = [
  ImgOne,
  ImgTwo,
  ImgThree,
  ImgFour,
  ImgFive,
  ImgSix,
  ImgSeven,
  ImgEight,
  ImgNine,
  ImgTen,
]

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      shopLinkClass: "",
    }
  }

  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }

    return array
  }

  handleScroll = event => {
    let linkClass
    if (
      window.scrollY < window.innerHeight / 2 ||
      window.innerHeight + window.scrollY > document.body.clientHeight - 500
    ) {
      linkClass = ""
    } else if (window.scrollY > window.innerHeight / 2) {
      linkClass = "show"
    }
    this.setState({
      shopLinkClass: linkClass,
    })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    this.setState({
      images: this.shuffleArray(imageArray),
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  render() {
    const images = this.state.images
    return (
      <Layout>
        <Seo title="Casa Alma" />

        <MainContainer>
          <ShopContainer>
            <VerticalShopLink
              className={this.state.shopLinkClass}
              href="https://shopcasaalma.ca/"
            >
              Shop Casa Alma
            </VerticalShopLink>
            <ShopContentContainer>
              <ShopSectionOne
                imgOne={images[0]}
                imgTwo={images[1]}
              ></ShopSectionOne>
              <ShopSectionTwo imgThree={images[2]}></ShopSectionTwo>
              <ShopSectionThree imgFour={images[3]}></ShopSectionThree>
              <ShopSectionFour imgFive={images[4]}></ShopSectionFour>
              <ShopSectionFive
                imgSix={images[5]}
                imgSeven={images[6]}
              ></ShopSectionFive>
              <ShopSectionSix
                imgEight={images[7]}
                imgNine={images[8]}
                imgTen={images[9]}
              ></ShopSectionSix>
            </ShopContentContainer>
          </ShopContainer>

          <StayContainer>
            <StaySectionCarousel></StaySectionCarousel>
            <StayTextContainer>
              <CabinTitle>cābin</CabinTitle>
              <LogoContainer></LogoContainer>

              <CabinSecondaryTitle>
                Home away from<br></br>home awaits.
              </CabinSecondaryTitle>

              <a href="https://casaalmacabin.ca/">
                <StayButton>Stay</StayButton>
              </a>
            </StayTextContainer>
          </StayContainer>
        </MainContainer>
      </Layout>
    )
  }
}

export default IndexPage
