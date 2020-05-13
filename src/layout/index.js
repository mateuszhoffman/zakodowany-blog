import React from 'react'
import Helmet from 'react-helmet'
import '../styles/main.scss'

import Footer from '../components/Footer'
import Header from '../components/Header'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Zakodowany by Mateusz Hoffman" />
    <Header />

    <div className="flex f-center">{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
