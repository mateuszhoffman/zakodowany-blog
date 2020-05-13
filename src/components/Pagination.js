import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext, pathPrefix }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <nav className="pagination" role="navigation">
      <div className="navbar navbar-menu">
        {previousPagePath && (
          <div className="navbar__item underline--magical">
            <Link to={previousPagePath} rel="prev">
              Poprzednia
            </Link>
          </div>
        )}
        {nextPagePath && (
          <div className="navbar__item underline--magical">
            <Link to={nextPagePath} rel="next">
              Następna
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Pagination
