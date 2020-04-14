import React, { Fragment } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import colors from '../styles/colors'
import Container from './Container'
import styled from 'styled-components'
import siteLogo from '../assets/zakodowany-logo.svg'

const HeaderWrapper = styled.header`
  border-bottom: 1px solid #f7f7f7;
  width: 100%;
  background: #ffffff;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
        <HeaderInner>
          <NavBrand logo={siteLogo} />
          <Navbar data={data} />
        </HeaderInner>
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
  display: flex;
  align-items: center;
  color: #191919;
  padding: 0 15px;

  outline: none;
  height: 100px;
  text-decoration: none;

  &:hover {
  }
`

const NavbarLinks = styled.div`
  display: flex;
  flex-direction: row;
`

const Navbar = ({ data }) => (
  <NavbarLinks>
    {data.allWordpressPage.edges.map(edge => (
      <NavbarItem
        className="navbar-item"
        to={edge.node.slug}
        key={edge.node.slug}
      >
        {edge.node.title}
      </NavbarItem>
    ))}
  </NavbarLinks>
)

export default Header
