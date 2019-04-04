import PropTypes from "prop-types"
import React from "react"
import NavLink from "./nav-link"

import "../css/header.css"

const Header = ({ siteTitle }) => (
  <header>
      <NavLink to="/" >
        {siteTitle}
      </NavLink>
      <NavLink to="/timeline" >
          Timeline
      </NavLink>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
