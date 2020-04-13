import React from 'react'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import styled, { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import Header from '../components/Header'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', sans-serif;
    color: #1D2020;
  }

  a {
    color: inherit;
  }

  img {
    max-width: 100%;
  }
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Zakodowany by Mateusz Hoffman" />
    <Normalize />
    <GlobalStyle />
    <Header />

    <Container>{children}</Container>
    <Footer />
  </div>
)

export default TemplateWrapper
