import React, { Fragment } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import colors from '../styles/colors'
import Container from './Container'
import styled from 'styled-components'
import siteLogo from '../assets/zakodowany-logo.svg'

const HeaderWrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  font-family: 'Rubik', sans-serif;
  font-weight: 500;
`

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <NavBrand logo={siteLogo} />
        <Navbar data={data} />
      </HeaderWrapper>
    )}
  />
)

const NavBrand = ({ logo }) => (
  <Link to="/">
    <img height="30px" src={logo} />
  </Link>
)

const NavbarItem = styled(Link)`
  color: #191919;
  padding: 5px 0px;
  margin: 0 12px;
  border-bottom: 2px solid transparent;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    border-bottom: 2px solid #191919;
  }
`

const Navbar = ({ data }) => (
  <div className="navbar-links">
    {data.allWordpressPage.edges.map(edge => (
      <NavbarItem
        className="navbar-item"
        to={edge.node.slug}
        key={edge.node.slug}
      >
        {edge.node.title}
      </NavbarItem>
    ))}
  </div>
)

export default Header
