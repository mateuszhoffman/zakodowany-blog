import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const Navbar = () => (
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
      <header className="app-header">
        <nav className="navbar">
          <div className="d-flex f-space-between">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <div className="brand">Zakodowany</div>
              </Link>
            </div>
            <div className="navbar-links">
              {data.allWordpressPage.edges.map(edge => (
                <Link
                  className="navbar-item"
                  to={edge.node.slug}
                  key={edge.node.slug}
                >
                  {edge.node.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    )}
  />
)

export default Navbar
