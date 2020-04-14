import React from 'react'
import styled from 'styled-components'
import Container from './Container'

const FooterWrapper = styled.div`
  padding: 40px 60px;
  color: #ffffff;
  background-color: #191919;
`

const Footer = () => (
  <FooterWrapper>
    <Container>© Zakodowany 2020 Wszelkie prawa zastrzeżone</Container>
  </FooterWrapper>
)

export default Footer
