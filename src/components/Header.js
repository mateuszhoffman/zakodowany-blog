import React, { Fragment } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

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
  <nav>
    {data.allWordpressPage.edges.map(edge => (
      <div className="navbar-item" to={edge.node.slug} key={edge.node.slug}>
        {edge.node.title}
      </div>
    ))}
  </nav>
)

export default Header
