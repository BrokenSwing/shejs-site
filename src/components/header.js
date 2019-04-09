import PropTypes from "prop-types"
import React from "react"
import NavLink from "./nav-link"

import "../css/header.css"

const Header = ({ siteTitle }) => (
  <header>
      <nav>
        <a href="javascript:void(0)" class="closebtn">&times;</a>
        <NavLink to="/" >Introduction</NavLink>
        <NavLink to="/laws">Les lois</NavLink>
        <NavLink to="/actors">Les acteurs</NavLink>
        <NavLink to="/debate">Arbre des débats</NavLink>
        <NavLink to="/timeline" >Frise chronologique</NavLink>
        <NavLink to="/log-book" >Ressources</NavLink>
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
