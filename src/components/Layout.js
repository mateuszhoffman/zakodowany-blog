import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import Footer from './Footer'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Zakodowany by Mateusz Hoffman" />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Navbar />
    <div className="container">{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
