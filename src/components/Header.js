import React, { useEffect } from 'react'
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

const Navbar = ({ data }) => {
  useEffect(() => {
    let burger = document.getElementById('burger')
    let mainNav = document.getElementById('js-menu')
    let navBarToggle = document.getElementById('js-navbar-toggle')

    navBarToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active')
      burger.classList.toggle('is-open')
    })
  }, [])
  return (
    <nav class="navbar container">
      <span class="navbar-toggle" id="js-navbar-toggle">
        <button id="burger" class="open-main-nav">
          <span class="burger"></span>
          <span class="burger-text">Menu</span>
        </button>
      </span>
      <Logo />
      <Menu items={data.allWordpressPage.edges} />
    </nav>
  )
}

export default Header
