import React from 'react'
import logoSrc from '../assets/images/zakodowany-logo.svg'
import logoone from '../assets/images/blogo-1.png'
import logotwo from '../assets/images/blogo-2.png'
import { Link } from 'gatsby'

const Logo = () => (
  <Link to="/">
    <img src={logotwo} className="logo" />
  </Link>
)

export default Logo
