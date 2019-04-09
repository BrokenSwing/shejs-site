import PropTypes from "prop-types"
import React from "react"
import NavLink from "./nav-link"

import "../css/header.css"

const Header = ({ siteTitle }) => (
  <header>
      <nav>
        <a href="javascript:void(0)" class="closebtn">&times;</a>
        <NavLink to="/" >Accueil</NavLink>
        <NavLink to="/timeline" >Frise chronologique</NavLink>
        <NavLink to="/log-book" >Carnet de bord</NavLink>
      </nav>
      <div class="topBrand">
        <a href="javascript:void(0)" class="openbtn">&#9776; Menu</a>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
