import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import styled from 'styled-components'
import { Normalize } from 'styled-normalize'

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Zakodowany by Mateusz Hoffman" />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Normalize />
    <Navbar />
    <Container>{children}</Container>
    <Footer />
  </div>
)

export default TemplateWrapper
