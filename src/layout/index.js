import React from 'react'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import styled, { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import Header from '../components/Header'

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #f7f9fb;
    color: #1D2020;
  }

  a {
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4 {
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
  }
`

const SectionWrapper = styled.section`
  padding: 50px 0;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Zakodowany by Mateusz Hoffman" />
    <Normalize />
    <GlobalStyle />
    <Header />
    <SectionWrapper>{children}</SectionWrapper>
    <Footer />
  </div>
)

export default TemplateWrapper
