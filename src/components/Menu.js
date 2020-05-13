import React from 'react'
import { Link } from 'gatsby'

const Menu = ({ items }) => (
  <ul class="main-nav" id="js-menu">
    {items &&
      items.map(edge => (
        <li>
          <div
            href="#"
            class="nav-links"
            to={edge.node.slug}
            key={edge.node.slug}
          >
            <Link className="magic-underline" to={edge.node.slug}>
              {edge.node.title}
            </Link>
          </div>
        </li>
      ))}
  </ul>
)

export default Menu
