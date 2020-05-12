import React, { Fragment } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Logo from '../components/Logo'

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
  <nav className="flex f-center f-al-start">
    {/* {data.allWordpressPage.edges.map(edge => (
      <div className="navbar-item" to={edge.node.slug} key={edge.node.slug}>
        {edge.node.title}
      </div>
    ))} */}
    <Logo />
  </nav>
)

export default Header
