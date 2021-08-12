import * as React from "react"
import styled from "styled-components"

const Container = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.75;
    transition: opacity 0.4s;
  }
`

const ImgLinkWrapper = ({ children }) => (
  <Container>
    <a href="https://shopcasaalma.ca/">{children}</a>
  </Container>
)

export default ImgLinkWrapper
