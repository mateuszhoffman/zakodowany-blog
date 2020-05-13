import React, { Fragment } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Logo from '../components/Logo'
import Menu from '../components/Menu'

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
    render={data => <Navbar data={data} />}
  />
)

const Navbar = ({ data }) => (
  <div className="flex f-center">
    <nav className="header flex container f-space-between f-al-start">
      <Logo />
      <Menu items={data.allWordpressPage.edges} />
    </nav>
  </div>
)

export default Header
