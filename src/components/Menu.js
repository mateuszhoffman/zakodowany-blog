import React from 'react'
import { Link } from 'gatsby'

const Menu = ({ items }) => {
  console.log(items)
  return (
    <div className="navbar">
      {items &&
        items.map(edge => (
          <div
            className="navbar__item underline--magical"
            to={edge.node.slug}
            key={edge.node.slug}
          >
            <Link to={edge.node.slug}>{edge.node.title}</Link>
          </div>
        ))}
    </div>
  )
}

export default Menu
