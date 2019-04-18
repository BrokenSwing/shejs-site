import { Link } from "gatsby"
import React from "react"

import "../css/nav-link.css"

const NavLink = ({ to, partially, children }) => (
  <Link to={to} activeClassName="active-nav-link" partiallyActive={partially} class="nav-link">
    {children}
  </Link>
)

export default NavLink
